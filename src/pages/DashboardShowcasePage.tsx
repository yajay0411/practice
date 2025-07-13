import React, { useState, useEffect } from "react";
import DashboardLayout from "../core/layout/DashboardLayout";
import { useNavbarConfig } from "../stores/navbarConfigStore";

const dashboardMainSections = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: "📊",
    content: (
      <div style={{ padding: "2rem 0" }}>
        <h2 style={{ margin: 0, fontSize: "1.5rem", color: "#1f2937" }}>
          Dashboard Overview
        </h2>
        <p style={{ color: "#6b7280", margin: "0.5rem 0 1.5rem 0" }}>
          Quick stats and summary of your application.
        </p>
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <div
            style={{
              background: "#fff",
              borderRadius: 12,
              boxShadow: "0 2px 8px rgba(102,126,234,0.06)",
              padding: "1.5rem 2rem",
              minWidth: 180,
            }}
          >
            <div style={{ fontSize: "2rem" }}>👥</div>
            <div style={{ fontWeight: 600, fontSize: "1.1rem" }}>
              Total Users
            </div>
            <div style={{ fontSize: "1.25rem", color: "#2563eb" }}>1,234</div>
          </div>
          <div
            style={{
              background: "#fff",
              borderRadius: 12,
              boxShadow: "0 2px 8px rgba(102,126,234,0.06)",
              padding: "1.5rem 2rem",
              minWidth: 180,
            }}
          >
            <div style={{ fontSize: "2rem" }}>💰</div>
            <div style={{ fontWeight: 600, fontSize: "1.1rem" }}>Revenue</div>
            <div style={{ fontSize: "1.25rem", color: "#059669" }}>$45,678</div>
          </div>
          <div
            style={{
              background: "#fff",
              borderRadius: 12,
              boxShadow: "0 2px 8px rgba(102,126,234,0.06)",
              padding: "1.5rem 2rem",
              minWidth: 180,
            }}
          >
            <div style={{ fontSize: "2rem" }}>📦</div>
            <div style={{ fontWeight: 600, fontSize: "1.1rem" }}>Orders</div>
            <div style={{ fontSize: "1.25rem", color: "#f59e0b" }}>567</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: "profile",
    label: "Profile",
    icon: "👤",
    content: (
      <div style={{ padding: "2rem 0" }}>
        <h2 style={{ margin: 0, fontSize: "1.5rem", color: "#1f2937" }}>
          Profile
        </h2>
        <p style={{ color: "#6b7280", margin: "0.5rem 0 1.5rem 0" }}>
          Manage your personal information and account settings.
        </p>
        <div
          style={{
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 2px 8px rgba(102,126,234,0.06)",
            padding: "2rem 2.5rem",
            maxWidth: 400,
          }}
        >
          <div style={{ fontWeight: 600, marginBottom: 8 }}>
            Name: <span style={{ fontWeight: 400 }}>John Doe</span>
          </div>
          <div style={{ fontWeight: 600, marginBottom: 8 }}>
            Email: <span style={{ fontWeight: 400 }}>john@example.com</span>
          </div>
          <div style={{ fontWeight: 600, marginBottom: 8 }}>
            Role: <span style={{ fontWeight: 400 }}>Admin</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: "settings",
    label: "Settings",
    icon: "⚙️",
    content: (
      <div style={{ padding: "2rem 0" }}>
        <h2 style={{ margin: 0, fontSize: "1.5rem", color: "#1f2937" }}>
          Settings
        </h2>
        <p style={{ color: "#6b7280", margin: "0.5rem 0 1.5rem 0" }}>
          Application and user preferences.
        </p>
        <div
          style={{
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 2px 8px rgba(102,126,234,0.06)",
            padding: "2rem 2.5rem",
            maxWidth: 400,
          }}
        >
          <div style={{ fontWeight: 600, marginBottom: 8 }}>
            Theme: <span style={{ fontWeight: 400 }}>Light</span>
          </div>
          <div style={{ fontWeight: 600, marginBottom: 8 }}>
            Notifications: <span style={{ fontWeight: 400 }}>Enabled</span>
          </div>
          <div style={{ fontWeight: 600, marginBottom: 8 }}>
            Language: <span style={{ fontWeight: 400 }}>English</span>
          </div>
        </div>
      </div>
    ),
  },
];

const DashboardShowcasePage: React.FC = () => {
  const [mainSection, setMainSection] = useState("dashboard");
  const { setConfig } = useNavbarConfig();

  const selectedSection =
    dashboardMainSections.find((s) => s.key === mainSection) ||
    dashboardMainSections[0];

  // Effect: Hide menu/search for profile/settings, restore for dashboard
  useEffect(() => {
    if (mainSection === "profile" || mainSection === "settings") {
      setConfig({ showMenu: false, showSearch: false });
    } else {
      setConfig({ showMenu: true, showSearch: true });
    }
    // Optionally, restore all on unmount
    // return () => resetConfig();
  }, [mainSection, setConfig]);

  return (
    <div style={{ padding: "2rem", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Controls Below Demo */}
        <div
          style={{
            margin: "0 auto 3rem auto",
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
            Main Section Controls
          </h2>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            {dashboardMainSections.map((section) => (
              <div
                key={section.key}
                style={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  boxShadow:
                    mainSection === section.key
                      ? "0 4px 16px rgba(102,126,234,0.12)"
                      : "0 2px 8px rgba(102,126,234,0.06)",
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
                  borderColor:
                    mainSection === section.key ? "#667eea" : "#e5e7eb",
                }}
                onClick={() => setMainSection(section.key)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === " " || e.key === "Enter") {
                    setMainSection(section.key);
                  }
                }}
                aria-pressed={mainSection === section.key}
                role="button"
              >
                <span style={{ fontSize: 22 }}>{section.icon}</span>
                {section.label}
              </div>
            ))}
          </div>
        </div>
        {/* Live Demo */}
        <div
          style={{
            margin: "0 auto 2.5rem auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {/* Fixed-size demo wrapper */}
          <div
            style={{
              width: 900,
              height: 500,
              maxWidth: "100%",
              maxHeight: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "#fff",
              border: "2px solid #e5e7eb",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 4px 24px 0 rgba(102,126,234,0.07)",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                margin: "0px auto 1rem auto",
                color: "#1f2937",
                fontWeight: 600,
                letterSpacing: 0.5,
              }}
            >
              Live Dashboard Demo
            </h2>
            <div
              style={{
                flex: 1,
                width: "100%",
                height: "100%",
                minHeight: 0,
                minWidth: 0,
                display: "flex",
              }}
            >
              <DashboardLayout>{selectedSection.content}</DashboardLayout>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Example */}
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
            <code>{`// 1. Create a DashboardLayout that accepts children for main content:
<DashboardLayout>
  {/* Main section changes based on state */}
  {mainSection === "dashboard" && <DashboardStats />}
  {mainSection === "profile" && <ProfileInfo />}
  {mainSection === "settings" && <SettingsPanel />}
</DashboardLayout>

// 2. Use state and controls to switch main content:
const [mainSection, setMainSection] = useState("dashboard");

// 3. Render controls:
<button onClick={() => setMainSection("dashboard")}>Dashboard</button>
<button onClick={() => setMainSection("profile")}>Profile</button>
<button onClick={() => setMainSection("settings")}>Settings</button>

// 4. The navbar and sidebar remain unchanged; only the main section updates.
`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default DashboardShowcasePage;
