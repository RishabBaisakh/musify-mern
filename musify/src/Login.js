import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <div className="login__header">
        <img src="MusifyLogo.PNG" />
        <div className="login__headerRight">
          <div className="login__headerRightLink">
            <p>About</p>
          </div>
        </div>
      </div>
      <div className="login__body">
        <div className="login__bodyLeft">
          <h3>Try to add a corousal here</h3>
        </div>
        <div className="login__bodyRight">
          <h1>Log in to your account</h1>
          <div className="login__bodyRightLoginButton">
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
