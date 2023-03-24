import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const Home = () => {
  return (
    <div className="contRow full">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default Home;
