import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";
import { Link } from "react-router-dom";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img className="sidebar__logo" src="MusifyLogo.PNG" />
      <Link to="/">
        <SidebarOption title="Home" Icon={HomeIcon} />
      </Link>
      <Link to="search">
        <SidebarOption title="Search" Icon={SearchIcon} />
      </Link>
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist, index) => (
        <SidebarOption key={index} title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
