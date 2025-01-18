import React, { useState } from "react";
import "../scss/login.scss";
import axios from "axios";
import { hostName } from "../common";
import { useNavigate } from "react-router-dom";

function Register() {
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
    <div className="loginPage">
      <div className="loginBox">
        <h1>Chatify</h1>
        <div className="signInBox">
          <h2>Sign-Up</h2>
          <h4>Email or Mobile Number</h4>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h4>Profile Name</h4>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
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
          <h4>ReType-Password</h4>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <br />
          <button
            onClick={() => {
              handleRegister();
            }}
          >
            Create
          </button>
          <br />
          <h4 className="spanTerms">
            Please read our Chatify's Terms and Conditions Carefully
          </h4>
        </div>
        <div className="registrationBox">
          {/* <hr /> */}
          <h5>Already a Chatify User?</h5>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Sign-In to your Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
