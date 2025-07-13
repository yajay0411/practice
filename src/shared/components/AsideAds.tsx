import React from "react";

export const AsideAdTop: React.FC = () => (
  <div
    style={{
      background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      padding: "1.25rem 1rem",
      borderRadius: "10px",
      textAlign: "center",
      fontWeight: 500,
      fontSize: "1.1rem",
      letterSpacing: 1,
      boxShadow: "0 2px 8px rgba(102,126,234,0.08)",
    }}
  >
    <span role="img" aria-label="megaphone" style={{ marginRight: 8 }}>
      📢
    </span>
    Top Banner Ad: Get 20% off your next purchase!
  </div>
);

export const AsideAdLeft: React.FC = () => (
  <div
    style={{
      background: "#f3f4f6",
      padding: "1rem",
      borderRadius: "10px",
      fontWeight: 500,
      fontSize: "1rem",
      color: "#374151",
      boxShadow: "0 2px 8px rgba(59,130,246,0.06)",
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <span role="img" aria-label="star" style={{ marginRight: 8 }}>
      ⭐
    </span>
    Left Sidebar Ad: Upgrade to Pro for more features!
  </div>
);

export const AsideAdRight: React.FC = () => (
  <div
    style={{
      background: "#fef9c3",
      padding: "1rem",
      borderRadius: "10px",
      fontWeight: 500,
      fontSize: "1rem",
      color: "#92400e",
      boxShadow: "0 2px 8px rgba(251,191,36,0.08)",
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <span role="img" aria-label="gift" style={{ marginRight: 8 }}>
      🎁
    </span>
    Right Sidebar Ad: Refer a friend and earn rewards!
  </div>
);

export const AsideAdBottom: React.FC = () => (
  <div
    style={{
      background: "#1f2937",
      color: "#fff",
      padding: "1rem",
      borderRadius: "10px",
      textAlign: "center",
      fontWeight: 500,
      fontSize: "1rem",
      boxShadow: "0 -2px 8px rgba(31,41,55,0.08)",
    }}
  >
    <span role="img" aria-label="info" style={{ marginRight: 8 }}>
      ℹ️
    </span>
    Bottom Footer Ad: Check out our latest blog post!
  </div>
);
