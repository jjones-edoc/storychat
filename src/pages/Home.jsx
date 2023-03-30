import React from 'react';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';
import Nav from '../components/Nav';
import AIChat from '../components/AIChat';

const Home = () => {
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <Nav />
        <AIChat />
      </div>
      {/* <Sidebar />
      <Chat /> */}
    </div>
  );
};

export default Home;
