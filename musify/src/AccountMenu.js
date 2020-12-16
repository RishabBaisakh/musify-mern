import React, { useState } from "react";
import "./AccountMenu.css";
import { useDataLayerValue } from "./DataLayer";
import { Link } from "react-router-dom";

function AccountMenu({ showMenu }) {
  const [active, setActive] = useState(showMenu);

  const blockDisplay = {
    display: "block",
  };

  const close = () => {
    setActive(false);
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
      <Link className="accountMenu__profileLink" to="/profile" onClick={close}>
        <h4>Profile</h4>
      </Link>
      <h4 onClick={logout} className="accountMenu__logout">
        Logout
      </h4>
    </div>
  );
}

export default AccountMenu;
