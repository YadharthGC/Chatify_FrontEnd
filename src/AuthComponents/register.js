import React, { useState } from "react";
import AuthLogin from "../Images/AuthLogin.png";
import "./register.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { hostName } from "../utilis/commonVariables";

export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      if (password !== confirmPassword) {
        return;
      }
      console.log(email, password);
      await axios
        .post(hostName + "chat/auth/signup", {
          email: email,
          name: name,
          password: password,
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            navigate("/");
          }
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="AuthRegister">
      <div className="loginImg">
        <img src={AuthLogin} alt="AuthLoginImage" />
      </div>
      <div className="loginBox">
        <h1>Chatify</h1>
        <h2>Join the Conversation</h2>
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
          className="nameInput"
          type="text"
          placeholder="Profile Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
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
        <input
          className="passwordInput"
          type="password"
          placeholder="ReType-password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />

        <button
          onClick={() => {
            handleRegister();
          }}
        >
          Join
        </button>
        <h5>Already an User?</h5>
        <button
          className="newBtn"
          onClick={() => {
            navigate("/");
          }}
        >
          LogIn to Your Account
        </button>
      </div>
    </div>
  );
}
