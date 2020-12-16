import React from "react";
import "./AccountMenu.css";

function AccountMenu({ showMenu }) {
  const blockDisplay = {
    display: "block",
  };

  return (
    <div style={showMenu ? blockDisplay : {}} className="accountMenu">
      <h4>Profile</h4>
      <h4 className="accountMenu__logout">Logout</h4>
    </div>
  );
}

export default AccountMenu;
