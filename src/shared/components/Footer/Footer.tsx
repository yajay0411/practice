import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#" className="footer-link">
            Privacy Policy
          </a>
          <a href="#" className="footer-link">
            Terms of Service
          </a>
          <a href="#" className="footer-link">
            Support
          </a>
          <a href="#" className="footer-link">
            Contact
          </a>
        </div>
        <div>© 2024 Ajay Yadav. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
