import React from "react";
import {
  useNavbarConfig,
  type NavbarConfig,
} from "../stores/navbarConfigStore";
import Navbar from "../shared/components/Navbar/Navbar";

// const FIXED_DEMO_WIDTH = 900;
// const FIXED_DEMO_HEIGHT = 80;

const NavbarShowcasePage: React.FC = () => {
  const { config, setConfig, resetConfig } = useNavbarConfig();

  // Controls for toggling features
  const featureToggles = [
    { key: "showBrand", label: "Show Brand" },
    { key: "showMenu", label: "Show Menu" },
    { key: "showSearch", label: "Show Search" },
    { key: "showNotifications", label: "Show Notifications" },
    { key: "showProfile", label: "Show Profile" },
  ];

  // Removed unused handlePresetClick

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            margin: "0 0 1rem 0",
          }}
        >
          Dynamic Navbar Showcase
        </h1>
        <p style={{ fontSize: "1.125rem", color: "#6b7280", margin: 0 }}>
          Explore the configurable navbar system with real-time updates
        </p>
      </div>

      {/* Live Demo on Top */}
      <div
        style={{
          margin: "0 auto 2.5rem auto",
          maxWidth: 1000,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            margin: "0px auto",
            color: "#1f2937",
            fontWeight: 600,
            letterSpacing: 0.5,
          }}
        >
          Live Navbar Demo
        </h2>
        <div
          style={{
            border: "2px solid #e5e7eb",
            borderRadius: "16px",
            overflow: "hidden",
            width: "100%",
            minHeight: 80,
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 24px 0 rgba(102,126,234,0.07)",
          }}
        >
          <Navbar />
        </div>
      </div>

      {/* Controls Below Demo */}
      <div
        style={{
          width: "100%",
          background: "#f8fafc",
          borderRadius: "16px",
          padding: "2rem 2rem 1.5rem 2rem",
          boxShadow: "0 2px 12px 0 rgba(102,126,234,0.04)",
        }}
      >
        <h2
          style={{
            fontSize: "1.25rem",
            margin: "0 0 1.5rem 0",
            color: "#1f2937",
            fontWeight: 600,
            letterSpacing: 0.5,
          }}
        >
          Navbar Controls
        </h2>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          {featureToggles.map((toggle) => (
            <div
              key={toggle.key}
              style={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(102,126,234,0.06)",
                padding: "1.25rem 1.5rem",
                minWidth: 160,
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                fontWeight: 500,
                fontSize: "1rem",
                cursor: "pointer",
                userSelect: "none",
                transition: "box-shadow 0.15s, border-color 0.15s",
              }}
              onClick={() =>
                setConfig({
                  [toggle.key]: !config[toggle.key as keyof NavbarConfig],
                })
              }
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === " " || e.key === "Enter") {
                  setConfig({
                    [toggle.key]: !config[toggle.key as keyof NavbarConfig],
                  });
                }
              }}
              aria-pressed={!!config[toggle.key as keyof NavbarConfig]}
              role="button"
            >
              <input
                type="checkbox"
                checked={!!config[toggle.key as keyof NavbarConfig]}
                onChange={(e) => setConfig({ [toggle.key]: e.target.checked })}
                style={{ width: 20, height: 20, pointerEvents: "none" }}
                tabIndex={-1}
                aria-hidden="true"
              />
              {toggle.label}
            </div>
          ))}
        </div>
        <button
          onClick={resetConfig}
          style={{
            background: "#6b7280",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "0.75rem 1.5rem",
            fontSize: "0.95rem",
            fontWeight: "500",
            cursor: "pointer",
            transition: "background-color 0.2s",
            marginBottom: "0.5rem",
            marginTop: "0.5rem",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#4b5563")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#6b7280")}
        >
          Reset to Default
        </button>
      </div>

      {/* Code Example */}
      <div
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          borderRadius: "16px",
          padding: "3rem",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            margin: "0 0 2rem 0",
            textAlign: "center",
          }}
        >
          Implementation Example
        </h2>
        <div
          style={{
            background: "rgba(0,0,0,0.2)",
            borderRadius: "8px",
            padding: "2rem",
          }}
        >
          <pre style={{ margin: 0, fontSize: "0.95rem", lineHeight: "1.7" }}>
            <code>{`// 1. Create a Zustand store for navbar config (see src/stores/navbarConfigStore.ts):
import { create } from "zustand";

export interface NavbarConfig {
  showProfile?: boolean;
  showSearch?: boolean;
  showNotifications?: boolean;
  showBrand?: boolean;
  showMenu?: boolean;
}

const defaultConfig: NavbarConfig = {
  showProfile: true,
  showSearch: true,
  showNotifications: true,
  showBrand: true,
  showMenu: true,
};

export const useNavbarConfig = create((set) => ({
  config: defaultConfig,
  setConfig: (newConfig) => set((state) => ({ config: { ...state.config, ...newConfig } })),
  resetConfig: () => set({ config: defaultConfig }),
}));

// 2. Use the config in your Navbar component:
import { useNavbarConfig } from "./stores/navbarConfigStore";

const Navbar = () => {
  const { config } = useNavbarConfig();
  return (
    <nav>
      {config.showBrand && <span>Brand</span>}
      {config.showMenu && <Menu />}
      {config.showSearch && <SearchBar />}
      {config.showNotifications && <Notifications />}
      {config.showProfile && <Profile />}
    </nav>
  );
};

// 3. Update config from anywhere in your app:
const { setConfig, resetConfig } = useNavbarConfig();
setConfig({ showSearch: false, showProfile: true });
resetConfig();

// The Navbar will update automatically based on config changes.
`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default NavbarShowcasePage;
