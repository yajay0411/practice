import React from "react";

const NavbarMenu: React.FC = () => {
  return (
    <div className="navbar-menu">
      <a
        href="#"
        className="navbar-item"
        style={{
          textDecoration: "none",
          color: "inherit",
          padding: "8px 12px",
          borderRadius: "4px",
        }}
      >
        Dashboard
      </a>
      <a
        href="#"
        className="navbar-item"
        style={{
          textDecoration: "none",
          color: "inherit",
          padding: "8px 12px",
          borderRadius: "4px",
        }}
      >
        Analytics
      </a>
      <a
        href="#"
        className="navbar-item"
        style={{
          textDecoration: "none",
          color: "inherit",
          padding: "8px 12px",
          borderRadius: "4px",
        }}
      >
        Reports
      </a>
      <a
        href="#"
        className="navbar-item"
        style={{
          textDecoration: "none",
          color: "inherit",
          padding: "8px 12px",
          borderRadius: "4px",
        }}
      >
        Settings
      </a>
    </div>
  );
};

export default NavbarMenu;
