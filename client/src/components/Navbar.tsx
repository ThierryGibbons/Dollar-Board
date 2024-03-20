// src/components/Navbar.tsx

import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-primary text-lg font-semibold">
          EEee
        </a>
        <div>
          <a
            href="/"
            className="px-3 py-2 rounded text-primary hover:text-secondary"
          >
            Home
          </a>
          <a
            href="/about"
            className="px-3 py-2 rounded text-primary hover:text-secondary"
          >
            About
          </a>
          <a
            href="/contact"
            className="px-3 py-2 rounded text-primary hover:text-secondary"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
