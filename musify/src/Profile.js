import React from "react";
import "./Profile.css";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";

function Profile() {
  const [{ user, playlists }, dispatch] = useDataLayerValue();

  console.log("profile | playlists => ", playlists);

  return (
    <div className="profile">
      <div className="profile__info">
        <div className="profile__infoAvatar">
          <Avatar src={user?.images[0]?.url} alt="RB" />
        </div>
        <div className="profile__infoDetails">
          <p>PROFILE</p>
          <h1>{user?.display_name}</h1>
        </div>
      </div>

      <div className="profile__playlists">
        <h3>Public Playlist</h3>
        {playlists?.items.map((playlist, index) => (
          <div key={index} className="profile__playlistCard"></div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
