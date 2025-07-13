import React from "react";

const NavbarProfile: React.FC = () => {
  return (
    <div className="navbar-profile">
      <div
        className="profile-dropdown"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
          padding: "8px",
          borderRadius: "4px",
        }}
      >
        <div
          className="profile-avatar"
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: "#3b82f6",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          JD
        </div>
        <span style={{ fontSize: "14px" }}>John Doe</span>
        <span style={{ fontSize: "12px" }}>▼</span>
      </div>
    </div>
  );
};

export default NavbarProfile;
