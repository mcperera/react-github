import React, { createContext, useState } from "react"; //useState, useEffect,
import mockUser from "./mockData/mockUser";
import mockFllowers from "./mockData/mockFollowers";
import mockRepos from "./mockData/mockRepos";

export const GithubContext = createContext();

function GitHubProvider({ children }) {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFllowers] = useState(mockFllowers);
  return (
    <GithubContext.Provider value={{ githubUser, repos, followers }}>
      {children}
    </GithubContext.Provider>
  );
}

export default GitHubProvider;
