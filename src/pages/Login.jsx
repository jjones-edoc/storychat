import React, { useState } from "react";
import bg from "../img/bg.png";
import "./Login.css";
const Login = () => {
  return (
    <form className="contRow">
      <div className="pane smHide">
        <img src={bg} />
        <h1>WELCOME BACK</h1>
      </div>
      <div className="pane smShow">
        <h2>LOGIN</h2>
        <div className="contCol">
          <div className="input">
            <i className="fa fa-user"></i>
            <input type="text" placeholder="Username" />
          </div>
          <div className="input">
            <i className="fa fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>
          <div className="input">
            <input required style={{ display: "none" }} type="file" id="file" />
            <label htmlFor="file">
              <i className="fa fa-image"></i>
              <span>Add an avatar</span>
            </label>
          </div>
          <input type="submit" className="login" value="LOGIN" />
          <p>Or Login Using</p>
          <div className="social-items contRow cursor">
            <i className="fa fa-google"></i>oogle
          </div>
          <h6>
            Not Member Yet? <span>Register</span>
          </h6>
        </div>
      </div>
    </form>
  );
};

export default Login;
