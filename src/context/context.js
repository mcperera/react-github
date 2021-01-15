import React, { createContext, useState } from "react"; //useState, useEffect,
import mockUser from "./mockData/mockUser";
import mockFllowers from "./mockData/mockFollowers";
import mockRepos from "./mockData/mockRepos";

export const GithubContext = createContext();

function GitHubProvider({ children }) {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [fllowers, setFllowers] = useState(mockFllowers);
  return (
    <GithubContext.Provider value={{ githubUser, repos, fllowers }}>
      {children}
    </GithubContext.Provider>
  );
}

export default GitHubProvider;
