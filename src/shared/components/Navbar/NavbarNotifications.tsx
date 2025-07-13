import React from "react";

const NavbarNotifications: React.FC = () => {
  return (
    <div className="navbar-notifications">
      <button
        className="notification-btn"
        style={{
          background: "none",
          border: "none",
          fontSize: "18px",
          cursor: "pointer",
          padding: "8px",
          borderRadius: "4px",
          position: "relative",
        }}
      >
        🔔
        <span
          style={{
            position: "absolute",
            top: "4px",
            right: "4px",
            background: "#ef4444",
            color: "white",
            borderRadius: "50%",
            width: "16px",
            height: "16px",
            fontSize: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          3
        </span>
      </button>
    </div>
  );
};

export default NavbarNotifications;
