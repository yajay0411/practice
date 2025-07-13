import React from "react";

const NavbarSearch: React.FC = () => {
  return (
    <div className="navbar-search">
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
        style={{
          padding: "8px 12px",
          border: "1px solid #e5e7eb",
          borderRadius: "6px",
          fontSize: "14px",
          width: "200px",
          outline: "none",
        }}
      />
    </div>
  );
};

export default NavbarSearch;
