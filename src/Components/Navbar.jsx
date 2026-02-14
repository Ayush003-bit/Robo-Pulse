

  import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Our Services", id: "services" },
    { name: "Our Products", id: "products" },
    { name: "Mission & Vision", id: "mission" },
    { name: "Team", id: "team" },
    { name: "Courses", id: "courses" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact Us", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src={Logo}
            alt="RoboPulse"
            className="w-16 h-16 rounded-full object-cover border-2 border-cyan-500"
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-8 font-medium text-gray-700">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="relative hover:text-cyan-500 transition duration-300 group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-cyan-500 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
