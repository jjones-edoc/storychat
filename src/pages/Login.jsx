import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import bg from "../img/bg.png";
import "./Login.css";

const Login = () => {
  const [hasError, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <form className="contRow" onSubmit={handleSubmit}>
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
          {hasError && <p className="error">Invalid Credentials</p>}
          <div className="input">
            <input type="submit" className="login" value="LOGIN" />
          </div>
          <p>Or Login Using</p>
          <div className="social-items contRow cursor">
            <i className="fa fa-google"></i>oogle
          </div>
          <h6>
            Not a member yet? <Link to="/register">Register</Link>
          </h6>
        </div>
      </div>
    </form>
  );
};

export default Login;
