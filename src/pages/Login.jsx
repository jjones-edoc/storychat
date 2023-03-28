import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import bg from "../img/bg.png";

const Login = () => {
  const [hasError, setError] = useState(false);
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (err) {
      setError(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!email || !password) return setError(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <form className="container py-5 h-100" onSubmit={handleSubmit}>
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
          <div className="card" style={{ borderRadius: "1rem", overflow: "hidden" }}>
            <div className="row g-0">
              <div className="col-md-6 col-lg-5 d-none d-md-block">
                <img src={bg} className="img-fluid" />
              </div>
              <div className="col-md-8 col-lg-7 col-xl-4 offset-xl-1">
                <div className="card-body p-4 p-lg-5 text-black">
                  <div className="d-flex align-items-center mb-3 pb-1">
                    <span className="h1 fw-bold mb-0">Story Chat</span>
                  </div>
                  <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
                    Sign into your account
                  </h5>
                  <div className="form-outline mb-4 d-flex">
                    <i className="fa fa-user me-2 fs-3 pt-2"></i>
                    <input type="text" placeholder="Username" className="form-control form-control-lg" />
                  </div>
                  <div className="form-outline mb-4 d-flex">
                    <i className="fa fa-lock me-2 fs-3 pt-2"></i>
                    <input type="password" placeholder="Password" className="form-control form-control-lg" />
                  </div>
                  {hasError && <p className="error">Invalid Credentials</p>}
                  <div className="form-outline mb-4">
                    <input type="submit" className="btn btn-dark btn-lg btn-block w-100" value="LOGIN" />
                  </div>
                  <p>Or Login Using</p>
                  <div className="form-outline mb-4" style={{ cursor: "pointer" }} onClick={handleGoogleLogin}>
                    <i className="fa fa-google"></i>oogle
                  </div>
                  <div className="mb-5 pb-lg-2">
                    Not a member yet? <Link to="/register">Register</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
