import React from "react";
import "./AccountMenu.css";
import { useDataLayerValue } from "./DataLayer";

function AccountMenu({ showMenu }) {
  const blockDisplay = {
    display: "block",
  };

  const [{ token }, dispatch] = useDataLayerValue();

  const logout = () => {
    dispatch({
      type: "SET_TOKEN",
      token: null,
    });
  };

  return (
    <div style={showMenu ? blockDisplay : {}} className="accountMenu">
      <h4>Profile</h4>
      <h4 onClick={logout} className="accountMenu__logout">
        Logout
      </h4>
    </div>
  );
}

export default AccountMenu;
