import React, { useState, useContext } from "react";
import { GithubContext } from "../context/context";
import { Info, Repos, User, Search, Navbar } from "../components";
import loadingImg from "../assets/images/loading.gif";

function Dashboard() {
  const { isLoading } = useContext(GithubContext);

  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImg} alt="loading" className="loading-img" />
      </main>
    );
  } else {
    return (
      <div>
        <Navbar />
        <Search />
        <Info />
        <User />
        <Repos />
      </div>
    );
  }
}

export default Dashboard;
