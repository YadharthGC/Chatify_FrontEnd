import React, { useState, useEffect } from "react";
import axios from "axios";
import "./login.scss";
import AuthLogin from "../Images/AuthLogin.png";
import { hostName } from "../utilis/commonVariables";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleMainUser } from "../Reducers/searchReducer";

export default function Login() {
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
        .then(async (res) => {
          console.log(res);
          // window.localStorage.setItem("jwt", res.data.token);
          // window.localStorage.setItem("userName", res.data.name);
          window.localStorage.setItem("userId", res.data.id);
          // dispatch(handleMainUser(res.data.userName));
          await navigate("/chatify/" + res.data.id);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="AuthLogin">
      <div className="loginBox">
        <h1>Chatify</h1>
        <h2>Log into Your Account</h2>
        <input
          className="emailInput"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="passwordInput"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button
          onClick={() => {
            handleLogin();
          }}
        >
          Connect
        </button>
        <h5>New to Chatify?</h5>
        <button
          className="newBtn"
          onClick={() => {
            navigate("/register");
          }}
        >
          Create your Chatify Account
        </button>
      </div>
      <div className="loginImg">
        <img src={AuthLogin} alt="AuthLoginImage" />
      </div>
    </div>
  );
}
