import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <div className="login__header">
        <img src="MusifyLogo.PNG" />
      </div>
      <div className="login__body">
        <div className="login__bodyLeft">
          <h1>
            The Musify application runs in collaboration with the Spotify Web
            API.
            <br />
            <br />
            The user must have a valid spotify account to use the application.
          </h1>
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
