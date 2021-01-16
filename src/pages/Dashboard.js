import React from "react";
import { Info, Repos, User, Search, Navbar } from "../components";

function Dashboard() {
  return (
    <div>
      {/* <Navbar /> */}
      <Search />
      <Info />
      <User />
      <Repos />
    </div>
  );
}

export default Dashboard;
