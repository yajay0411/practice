import React from "react";
import Navbar from "../../shared/components/Navbar/Navbar";
import Footer from "../../shared/components/Footer/Footer";
import Asidebar from "../../shared/components/Asidebar";

interface IDashboardLayoutOptions {
  showNavbar?: boolean;
  showFooter?: boolean;
}

interface IDashboardLayoutProps {
  children: React.ReactNode;
  options?: IDashboardLayoutOptions;
}

const defaultOptions = {
  showNavbar: true,
  showFooter: true,
};

const DashboardLayout: React.FC<IDashboardLayoutProps> = ({
  children,
  options = defaultOptions,
}) => {
  options = {
    ...defaultOptions,
    ...options,
  };
  return (
    <div className="dashboard-container">
      {options.showNavbar && <Navbar />}

      <div className="main-content">
        <Asidebar />
        <main className="main">
          <div className="main-content-area">{children}</div>
        </main>
      </div>

      {options.showFooter && <Footer />}
    </div>
  );
};

export default DashboardLayout;
