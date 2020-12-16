import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AccountMenu from "./AccountMenu";

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();

  console.log("user => ", user);
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search for Artist, Songs, or Albums" type="text" />
      </div>

      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt="RB" />
        <h4>{user?.display_name}</h4>
        <ArrowDropDownIcon />
        <AccountMenu />
      </div>
    </div>
  );
}

export default Header;
