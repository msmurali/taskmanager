import React from "react";
import { Outlet } from "react-router";
import SideBar from "components/sidebar.component";

const Home = () => {
  return (
    <div className="main w-100 grid grid-cols-1 grid-rows-layout md:grid-rows-1 md:grid-cols-layout">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Home;
