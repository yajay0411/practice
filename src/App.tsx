import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Pages
import HomePage from "./pages/HomePage";
import NavbarShowcasePage from "./pages/NavbarShowcasePage";
import AsideShowcasePage from "./pages/AsideShowcasePage";
import DashboardShowcasePage from "./pages/DashboardShowcasePage";
import Footer from "./shared/components/Footer/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        {/* Navigation Header */}
        <header
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            padding: "1rem 2rem",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <h1 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "bold" }}>
                React Layout Showcase
              </h1>
              <span
                style={{
                  background: "rgba(255,255,255,0.2)",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "20px",
                  fontSize: "0.875rem",
                }}
              >
                Learning Portfolio
              </span>
            </div>

            <nav>
              <ul
                style={{
                  display: "flex",
                  gap: "2rem",
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                }}
              >
                <li>
                  <Link
                    to="/"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontWeight: "500",
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.opacity = "0.8")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/navbar"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontWeight: "500",
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.opacity = "0.8")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    Navbar
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontWeight: "500",
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.opacity = "0.8")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/aside"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontWeight: "500",
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.opacity = "0.8")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    Aside
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main style={{ minHeight: "calc(100vh - 80px)" }}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/navbar" element={<NavbarShowcasePage />} />
            <Route path="/dashboard" element={<DashboardShowcasePage />} />
            <Route path="/aside" element={<AsideShowcasePage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
