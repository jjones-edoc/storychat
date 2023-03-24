import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

//firebase includes
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

import { auth, db, storage } from "../firebase";
import bg from "../img/register.png";
import "./Login.css";

const Register = () => {
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    if (!displayName || !email || !password || !file) {
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
    <form className="contRow" onSubmit={handleSubmit}>
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
            <i className="fa fa-envelope"></i>
            <input type="email" placeholder="Email" />
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
          {loading && "Uploading and compressing the image please wait..."}
          {hasError && <span>Something went wrong</span>}
          <input type="submit" className="login" value="REGISTER" />
          <p>Or Register Using</p>
          <div className="social-items contRow cursor">
            <i className="fa fa-google"></i>oogle
          </div>
          <h6>
            Already a Member? <Link to="/login">Login</Link>
          </h6>
        </div>
      </div>
    </form>
  );
};

export default Register;
