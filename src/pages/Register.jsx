import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

//firebase includes
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

import { auth, db, storage } from "../firebase";
import bg from "../img/register.png";

const Register = () => {
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleFileUploaded = (e) => {
    setFile(e.target.files[0]);
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const res = await signInWithPopup(auth, provider);
      console.log(res);
      const { displayName, email, photoURL, uid } = res.user;
      await setDoc(doc(db, "users", uid), {
        uid,
        displayName,
        email,
        photoURL,
      });
      await setDoc(doc(db, "userChats", uid), {});
      navigate("/");
    } catch (err) {
      console.log(err);
      setHasError(true);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    if (!displayName || !email || !password || !file) {
      console.log("error");
      setHasError(true);
      return;
    }

    try {
      setLoading(true);
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            //clear form
            e.target[0].value = "";
            e.target[1].value = "";
            e.target[2].value = "";
            e.target[3].value = "";
            //redirect to home
            navigate("/");
          } catch (err) {
            console.log(err);
            setHasError(true);
          }
        });
      });
    } catch (err) {
      setHasError(true);
    }
    setLoading(false);
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
                    Join Story Chat Today!
                  </h5>
                  <div className="form-outline mb-4 d-flex">
                    <i className="fa fa-user me-2 fs-3 pt-2"></i>
                    <input type="text" placeholder="Username" className="form-control form-control-lg" />
                  </div>
                  <div className="form-outline mb-4 d-flex">
                    <i className="fa fa-envelope me-2 fs-5 pt-3"></i>
                    <input type="email" placeholder="Email" className="form-control form-control-lg" />
                  </div>
                  <div className="form-outline mb-4 d-flex">
                    <i className="fa fa-lock me-2 fs-3 pt-2"></i>
                    <input type="password" placeholder="Password" className="form-control form-control-lg" />
                  </div>
                  {!file && (
                    <div className="form-outline mb-4 d-flex">
                      <input required style={{ display: "none" }} type="file" id="file" onChange={handleFileUploaded} />
                      <label htmlFor="file">
                        <i className="fa fa-image me-2 fs-3 pt-2"></i>
                        <span>Add an avatar</span>
                      </label>
                    </div>
                  )}

                  {loading && "Uploading and compressing the image please wait..."}
                  {hasError && <span>Something went wrong</span>}
                  <div className="form-outline mb-4">
                    <input type="submit" className="btn btn-dark btn-lg btn-block w-100" value="REGISTER" />
                  </div>
                  <p>Or register using</p>
                  <div className="form-outline mb-4" style={{ cursor: "pointer" }} onClick={handleGoogleLogin}>
                    <i className="fa fa-google"></i>oogle
                  </div>
                  <div className="mb-5 pb-lg-2">
                    Already a member? <Link to="/login">Login</Link>
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

export default Register;
