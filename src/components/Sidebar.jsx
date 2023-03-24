import React from "react";
import Navbar from "./sidebar_cp/Navbar";
import Search from "./sidebar_cp/Search";
import Chats from "./sidebar_cp/Chats";

const Sidebar = () => {
  const sidebarStyle = {
    flex: "1",
    backgroundColor: "#3e3c61",
    position: "relative",
    height: "100%",
  };
  return (
    <div style={sidebarStyle}>
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
