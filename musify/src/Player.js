import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";

function Player({ spotify }) {
  return (
    <div className="player">
      {/* <Router></Router> */}
      <Sidebar />

      <div className="player__body">
        <Header />

        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
