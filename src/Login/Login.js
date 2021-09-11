import { FormatBoldRounded } from "@material-ui/icons";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { React, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import "./Login.css";

export default function Login() {
  const history = useHistory();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const logginUser = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const signUpUser = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="logIn">
      <Link>
        <img
          src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
          className="logInLogo"
        />
      </Link>
      <div className="logInContainer">
        <h2>Sign In</h2>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={userEmail}
            onChange={(event) => setUserEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={userPassword}
            onChange={(event) => setUserPassword(event.target.value)}
          />
          <button onClick={logginUser} type="submit" className="login-button">
            Sign In
          </button>
        </form>
        <p>by signing in, you agree to amazon's clone terms and conditions</p>
        <button onClick={signUpUser} className="loginRegistration">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}
