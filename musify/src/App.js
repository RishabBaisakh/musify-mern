import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

// Super object, which is going to interact between React app and spotify....
const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      // Giving the access to the spotify api....
      spotify.setAccessToken(_token);

      // to get the user's account....
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((response) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: response,
        });
      });

      spotify.getPlaylist("37i9dQZEVXbraniIIoy8Us").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });

      spotify.getCategories().then((categories) => {
        console.log("categories => ", categories);

        dispatch({
          type: "SET_CATEGORIES",
          categories: categories,
        });
      });
    }

    console.log("Recieved token => ", _token);
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
