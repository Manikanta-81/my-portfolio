import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center p-4">
      <p>© {new Date().getFullYear()} MyPortfolio. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;   // ✅ must be default export
