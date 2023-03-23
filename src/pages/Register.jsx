import React, { useState } from 'react';
import bg from '../img/register.png';
import './Login.css';
const Register = () => {
  return (
    <form className="contRow">
      <div className="pane smHide">
        <img src={bg} />
        <h1>Join Story Chat Today!</h1>
      </div>
      <div className="pane smShow">
        <h2>REGISTER</h2>
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
            <input required style={{ display: 'none' }} type="file" id="file" />
            <label htmlFor="file">
              <i className="fa fa-image"></i>
              <span>Add an avatar</span>
            </label>
          </div>
          <input type="submit" className="login" value="REGISTER" />
          <p>Or Register Using</p>
          <div className="social-items contRow cursor">
            <i className="fa fa-google"></i>oogle
          </div>
          <h6>
            Already a Member? <span>Login</span>
          </h6>
        </div>
      </div>
    </form>
  );
};

export default Register;
