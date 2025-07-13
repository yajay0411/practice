import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  const features = [
    {
      title: "Aside Layout System",
      description:
        "Flexible aside layout with multiple positions and configurations",
      icon: "📐",
      path: "/aside",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      title: "Dynamic Navbar",
      description: "Configurable navbar with Zustand state management",
      icon: "🧭",
      path: "/navbar",
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
    {
      title: "Dashboard Layout",
      description:
        "Classic dashboard layout with persistent navbar, sidebar, and dynamic main content.",
      icon: "📊",
      path: "/dashboard",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
  ];

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Hero Section */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "4rem",
          padding: "3rem 0",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            margin: "0 0 1rem 0",
          }}
        >
          React Layout Learning Showcase
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            color: "#6b7280",
            margin: "0 0 2rem 0",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          A comprehensive demonstration of React layout patterns, authentication
          systems, and modern UI/UX practices built with TypeScript, Zustand,
          and React Router.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              background: "#3b82f6",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "20px",
              fontSize: "0.875rem",
              fontWeight: "500",
            }}
          >
            TypeScript
          </span>
          <span
            style={{
              background: "#10b981",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "20px",
              fontSize: "0.875rem",
              fontWeight: "500",
            }}
          >
            Zustand
          </span>
          <span
            style={{
              background: "#f59e0b",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "20px",
              fontSize: "0.875rem",
              fontWeight: "500",
            }}
          >
            React Router
          </span>
          <span
            style={{
              background: "#8b5cf6",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "20px",
              fontSize: "0.875rem",
              fontWeight: "500",
            }}
          >
            Modern UI/UX
          </span>
        </div>
      </div>

      {/* Features Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "2rem",
          marginBottom: "4rem",
        }}
      >
        {features.map((feature, index) => (
          <Link
            key={index}
            to={feature.path}
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "block",
            }}
          >
            <div
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "2rem",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                border: "1px solid #e5e7eb",
                transition: "all 0.3s ease",
                cursor: "pointer",
                minHeight: 320,
                height: 320,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 25px -5px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1)";
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "16px",
                  background: feature.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                  marginBottom: "1rem",
                }}
              >
                {feature.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  margin: "0 0 0.5rem 0",
                  color: "#1f2937",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  color: "#6b7280",
                  margin: 0,
                  lineHeight: "1.6",
                }}
              >
                {feature.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
