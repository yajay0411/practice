import React, { useState } from "react";
import AsideLayout from "../core/layout/AsideLayout";
import {
  AsideAdTop,
  AsideAdLeft,
  AsideAdRight,
  AsideAdBottom,
} from "../shared/components/AsideAds";

const FIXED_DEMO_WIDTH = 900;
const FIXED_DEMO_HEIGHT = "750px";
const FIXED_ASIDE_WIDTH = "200px";

const AsideShowcasePage: React.FC = () => {
  const [currentConfig, setCurrentConfig] = useState(0);

  const asideConfigurations = [
    {
      name: "Left Sidebar",
      description: "Traditional left sidebar layout",
      config: {
        asides: [
          {
            position: "Left" as const,
            content: <AsideAdLeft />,
            width: FIXED_ASIDE_WIDTH,
            show: true,
          },
        ],
      },
      icon: "⬅️",
    },
    {
      name: "Right Sidebar",
      description: "Right sidebar for additional content",
      config: {
        asides: [
          {
            position: "Right" as const,
            content: <AsideAdRight />,
            width: FIXED_ASIDE_WIDTH,
            show: true,
          },
        ],
      },
      icon: "➡️",
    },
    {
      name: "Top Header",
      description: "Top header with navigation",
      config: {
        asides: [
          {
            position: "Top" as const,
            content: <AsideAdTop />,
            height: "auto",
            show: true,
          },
        ],
      },
      icon: "⬆️",
    },
    {
      name: "Bottom Footer",
      description: "Bottom footer with information",
      config: {
        asides: [
          {
            position: "Bottom" as const,
            content: <AsideAdBottom />,
            height: "60px",
            show: true,
          },
        ],
      },
      icon: "⬇️",
    },
    {
      name: "Left + Right",
      description: "Dual sidebar layout",
      config: {
        asides: [
          {
            position: "Left" as const,
            content: <AsideAdLeft />,
            width: FIXED_ASIDE_WIDTH,
            show: true,
          },
          {
            position: "Right" as const,
            content: <AsideAdRight />,
            width: FIXED_ASIDE_WIDTH,
            show: true,
          },
        ],
      },
      icon: "⬅️➡️",
    },
    {
      name: "Top + Bottom",
      description: "Header and footer layout",
      config: {
        asides: [
          {
            position: "Top" as const,
            content: <AsideAdTop />,
            height: "80px",
            show: true,
          },
          {
            position: "Bottom" as const,
            content: <AsideAdBottom />,
            height: "60px",
            show: true,
          },
        ],
      },
      icon: "⬆️⬇️",
    },
    {
      name: "All Sides",
      description: "Complete layout with all positions",
      config: {
        asides: [
          {
            position: "Top" as const,
            content: <AsideAdTop />,
            height: "60px",
            show: true,
          },
          {
            position: "Left" as const,
            content: <AsideAdLeft />,
            width: FIXED_ASIDE_WIDTH,
            show: true,
          },
          {
            position: "Right" as const,
            content: <AsideAdRight />,
            width: FIXED_ASIDE_WIDTH,
            show: true,
          },
          {
            position: "Bottom" as const,
            content: <AsideAdBottom />,
            height: "40px",
            show: true,
          },
        ],
      },
      icon: "🔲",
    },
  ];

  const handleConfigChange = (index: number) => {
    setCurrentConfig(index);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "1400px", margin: "0 auto" }}>
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
          Aside Layout Showcase
        </h1>
        <p style={{ fontSize: "1.125rem", color: "#6b7280", margin: 0 }}>
          Explore the flexible aside layout system with multiple positions and
          configurations
        </p>
      </div>

      {/* Configuration Selector */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              margin: "0 0 1rem 0",
              color: "#1f2937",
            }}
          >
            Layout Configurations
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
            }}
          >
            {asideConfigurations.map((config, index) => (
              <button
                key={index}
                onClick={() => handleConfigChange(index)}
                style={{
                  background: currentConfig === index ? "#3b82f6" : "white",
                  color: currentConfig === index ? "white" : "#374151",
                  border: `1px solid ${
                    currentConfig === index ? "#3b82f6" : "#e5e7eb"
                  }`,
                  borderRadius: "12px",
                  padding: "1rem",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  textAlign: "left",
                }}
                onMouseEnter={(e) => {
                  if (currentConfig !== index) {
                    e.currentTarget.style.background = "#f8fafc";
                    e.currentTarget.style.borderColor = "#cbd5e1";
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentConfig !== index) {
                    e.currentTarget.style.background = "white";
                    e.currentTarget.style.borderColor = "#e5e7eb";
                  }
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <span style={{ fontSize: "1.25rem" }}>{config.icon}</span>
                  <h3
                    style={{ margin: 0, fontSize: "1rem", fontWeight: "600" }}
                  >
                    {config.name}
                  </h3>
                </div>
                <p style={{ margin: 0, fontSize: "0.875rem", opacity: 0.8 }}>
                  {config.description}
                </p>
              </button>
            ))}
          </div>
        </div>
        {/* Live Demo */}
        <div style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              margin: "0 0 1rem 0",
              color: "#1f2937",
            }}
          >
            Live Demo: {asideConfigurations[currentConfig].name}
          </h2>
          <div
            style={{
              border: "2px solid #e5e7eb",
              borderRadius: "16px",
              overflow: "hidden",
              width: FIXED_DEMO_WIDTH,
              height: FIXED_DEMO_HEIGHT,
              margin: "0 auto",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AsideLayout options={asideConfigurations[currentConfig].config}>
              <div
                style={{
                  padding: "2rem",
                  background: "white",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    marginBottom: "1rem",
                  }}
                >
                  🎯
                </div>
                <h3
                  style={{
                    margin: "0 0 0.5rem 0",
                    color: "#1f2937",
                    fontSize: "1.5rem",
                  }}
                >
                  Main Content Area
                </h3>
                <p style={{ margin: 0, color: "#6b7280", maxWidth: "400px" }}>
                  This is the main content area that adapts to the aside layout
                  configuration. The content automatically adjusts based on the
                  positions and sizes of the asides.
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                    gap: "1rem",
                    marginTop: "2rem",
                    width: "100%",
                    maxWidth: "500px",
                  }}
                >
                  <div
                    style={{
                      background: "#f3f4f6",
                      padding: "1rem",
                      borderRadius: "8px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                      📊
                    </div>
                    <div style={{ fontSize: "0.875rem", fontWeight: "500" }}>
                      Analytics
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#f3f4f6",
                      padding: "1rem",
                      borderRadius: "8px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                      👥
                    </div>
                    <div style={{ fontSize: "0.875rem", fontWeight: "500" }}>
                      Users
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#f3f4f6",
                      padding: "1rem",
                      borderRadius: "8px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                      ⚙️
                    </div>
                    <div style={{ fontSize: "0.875rem", fontWeight: "500" }}>
                      Settings
                    </div>
                  </div>
                </div>
              </div>
            </AsideLayout>
          </div>
        </div>
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
          <pre style={{ margin: 0, fontSize: "0.875rem", lineHeight: "1.6" }}>
            <code>{`// Example: Configuring an AsideLayout with multiple asides

// Import your custom components for each aside position
// e.g., Sidebar, Panel, Header, and MainContent

<AsideLayout
  options={{
    asides: [
      {
        position: "Left",
        content: <Sidebar />,
        width: "250px",
        show: true,
      },
      {
        position: "Right",
        content: <Panel />,
        width: "300px",
        show: true,
      },
      {
        position: "Top",
        content: <Header />,
        height: "80px",
        show: true,
      }
    ]
  }}
>
  <MainContent />
</AsideLayout>
`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default AsideShowcasePage;
