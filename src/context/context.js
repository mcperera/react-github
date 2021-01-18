import React, { createContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const rootURL = "https://api.github.com";

export const GithubContext = createContext();

function GitHubProvider({ children }) {
  const { isAuthenticated, user } = useAuth0();

  const userGit = isAuthenticated && user.nickname;

  const [githubUser, setGithubUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const [followers, setFollowers] = useState(null);

  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState({ show: false, msg: "" });

  const searchGitHubUser = async (user = "mcperera") => {
    toggleError();
    hideError();
    setIsLoading(true);
    const response = await axios(`${rootURL}/users/${user}`).catch((error) =>
      console.log(error)
    );
    if (response) {
      setGithubUser(response.data);
      const { login, followers_url } = response.data;
      //REPOS-->
      // await axios(`${rootURL}/users/${login}/repos?per_page=100`)
      //   .then((res) => {
      //     setRepos(res.data);
      //   })
      //   .catch((error) => console.log(error));
      // //Followers -->
      // await axios(`${followers_url}?per_page`)
      //   .then((res) => {
      //     setFollowers(res.data);
      //   })
      //   .catch((error) => console.log(error));

      await Promise.allSettled([
        axios(`${rootURL}/users/${login}/repos?per_page=100`),
        axios(`${followers_url}?per_page`),
      ])
        .then((result) => {
          const [repos, followers] = result;
          const status = "fulfilled";

          if (repos.status === status) {
            setRepos(repos.value.data);
          }

          if (followers.status === status) {
            setFollowers(followers.value.data);
          }
        })
        .catch((error) => console.log("Error -->", error));
    } else {
      toggleError(true, "There's no user with that Username");
      hideError();
    }
    checkRequest();
    setIsLoading(false);
  };

  const checkRequest = () => {
    axios(`${rootURL}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setRequests(remaining);
        if (remaining === 0) {
          toggleError(true, "Sorry, You have exceeded your hourly rate limit!");
          hideError();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function toggleError(show = false, msg = "") {
    setError({ show, msg });
  }

  function hideError() {
    setTimeout(() => toggleError(), 5000);
  }

  useEffect(checkRequest, []);
  useEffect(() => {
    if (userGit) {
      searchGitHubUser(userGit);
    } else {
      searchGitHubUser();
    }
  }, [userGit]);

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        error,
        searchGitHubUser,
        isLoading,
      }}>
      {children}
    </GithubContext.Provider>
  );
}

export default GitHubProvider;
