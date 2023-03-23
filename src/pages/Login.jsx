import React, { useState } from 'react';
import bg from '../img/bg.png';
import './Login.css';
const Login = () => {
  return (
    <form className="contRow">
      <div className="pane smHide">
        <img src={bg} />
        <h1>Welcome to Story Chat</h1>
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
            <input type="submit" className="login" value="LOGIN" />
          </div>
          <p>Or Login Using</p>
          <div className="social-items contRow cursor">
            <i className="fa fa-google"></i>oogle
          </div>
          <h6>
            Not a member yet? <span>Register</span>
          </h6>
        </div>
      </div>
    </form>
  );
};

export default Login;
