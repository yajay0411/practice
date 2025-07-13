import React from "react";
import { useNavbarConfig } from "../../../stores/navbarConfigStore";
import NavbarSearch from "./NavbarSearch";
import NavbarNotifications from "./NavbarNotifications";
import NavbarProfile from "./NavbarProfile";
import NavbarMenu from "./NavbarMenu";

const Navbar: React.FC = () => {
  const { config } = useNavbarConfig();

  return (
    <nav className="navbar" style={{ width: "100%" }}>
      <div
        className="navbar-content"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 1rem",
        }}
      >
        {/* Brand */}
        {config.showBrand && (
          <a
            href="#"
            className="navbar-brand"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Brand
          </a>
        )}

        {/* Center section with menu and search */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            flex: 1,
            justifyContent: "center",
          }}
        >
          {config.showMenu && <NavbarMenu />}
          {config.showSearch && <NavbarSearch />}
        </div>

        {/* Right section with notifications and profile */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {config.showNotifications && <NavbarNotifications />}
          {config.showProfile && <NavbarProfile />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
