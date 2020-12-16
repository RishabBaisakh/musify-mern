import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchCategories from "./SearchCategories";
import Profile from "./Profile";

function Player({ spotify }) {
  return (
    <div className="player">
      <Router>
        <Sidebar />
        <div className="player__body">
          <Header />

          <Switch>
            <Route path="/search">
              <SearchCategories />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default Player;
