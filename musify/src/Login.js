import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img src="MusifyLogo.PNG" />

      <a href={loginUrl}>LOGIN WITH MUSIFY</a>
    </div>
  );
}

export default Login;
