import React, { useState, useEffect } from "react";
import "../scss/login.scss";
import axios from "axios";
import { hostName } from "../common";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleMainUser } from "../features";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      console.log(email, password);
      await axios
        .post(hostName + "chat/auth/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res);
          window.localStorage.setItem("jwt", res.data.token);
          window.localStorage.setItem("mainUser", res.data.name);
          window.localStorage.setItem("mainUserId", res.data.id);
          dispatch(handleMainUser(res.data.userName));
          navigate("/chatify");
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="loginPage">
      <div className="loginBox">
        <h1>Chatify</h1>
        <div className="signInBox">
          <h2>Sign-in</h2>
          <h4>Email or Mobile Number</h4>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h4>Password</h4>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <button
            onClick={() => {
              handleLogin();
            }}
          >
            Continue
          </button>
          <br />
          <h4 className="spanTerms">
            By Continuing, you agree to Chatify's Terms and Conditions
          </h4>
        </div>
        <div className="registrationBox">
          {/* <hr /> */}
          <h5>New to Chatify?</h5>
          <button
            onClick={() => {
              navigate("/register");
            }}
          >
            Create your Chatify Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
