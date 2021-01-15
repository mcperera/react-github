import React from "react";
import { Info, Repos, User, Search, Navbar } from "../components";

function Dashboard() {
  return (
    <div>
      <Info />
      <Repos />
      <User />
      <Search />
      <Navbar />
    </div>
  );
}

export default Dashboard;
