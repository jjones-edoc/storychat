import React, { useContext } from "react";
import "./Navbar.css";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { ProjContext } from "../../context/ProjContext";

const Navbar = () => {
  const { currentUser } = useContext(ProjContext);

  return (
    <div className="navbar">
      <span className="logo">Story Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
