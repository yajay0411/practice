import React from "react";

const Asidebar: React.FC = () => {
  return (
    <aside className="aside">
      <div className="sidebar-content">
        {/* Main Navigation */}
        <div className="sidebar-section">
          <h3 className="sidebar-title">Main Menu</h3>
          <ul className="sidebar-menu">
            <li className="sidebar-item">
              <a href="#" className="sidebar-link active">
                <span className="sidebar-icon">📊</span>
                Dashboard
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <span className="sidebar-icon">📈</span>
                Analytics
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <span className="sidebar-icon">📋</span>
                Reports
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <span className="sidebar-icon">👥</span>
                Users
              </a>
            </li>
          </ul>
        </div>

        {/* Management */}
        <div className="sidebar-section">
          <h3 className="sidebar-title">Management</h3>
          <ul className="sidebar-menu">
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <span className="sidebar-icon">⚙️</span>
                Settings
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <span className="sidebar-icon">🔒</span>
                Security
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <span className="sidebar-icon">💳</span>
                Billing
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="sidebar-section">
          <h3 className="sidebar-title">Support</h3>
          <ul className="sidebar-menu">
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <span className="sidebar-icon">❓</span>
                Help Center
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <span className="sidebar-icon">📧</span>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Asidebar;
