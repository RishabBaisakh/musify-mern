import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import AccountMenu from "./AccountMenu";

function Header() {
  const [menuSelect, setMenuSelect] = useState(false);
  const [{ user }, dispatch] = useDataLayerValue();
  const accountDropdown = () => setMenuSelect(!menuSelect);
  const menuActiveStyle = {
    backgroundColor: "rgb(68, 65, 65)",
    borderRadius: "30px",
  };

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search for Artist, Songs, or Albums" type="text" />
      </div>

      <div
        // style={menuSelect ? menuActiveStyle : {}}
        onClick={accountDropdown}
        className="header__right"
      >
        <Avatar src={user?.images[0]?.url} alt="RB" />
        <h4>{user?.display_name}</h4>
        {menuSelect ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}

        <AccountMenu showMenu={menuSelect} />
      </div>
    </div>
  );
}

export default Header;
