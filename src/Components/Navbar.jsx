

  import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Menu, X } from "lucide-react"; // install lucide-react if not present

export function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    "Home",
    "About-Us",
    "Our-Services",
    "School-Program",
    "Our-Products",
    "Testimonial",
    "Team",
    "Composite-Skill-Lab",
    "Contact-Us",
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 backdrop-blur-md shadow-lg">
      <div className="flex items-center justify-between px-6 md:px-12 h-[80px]">

        {/* Logo */}
        <div className="flex items-center">
          <img
            className="h-14 w-14 md:h-20 md:w-20 rounded-full p-2 bg-white/20 hover:scale-105 transition duration-300"
            src={Logo}
            alt="Logo"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-base">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item}`}
              className="relative text-white font-medium px-2 py-1 transition duration-300
              hover:text-stone-900
              after:content-[''] after:absolute after:left-0 after:-bottom-1
              after:h-[2px] after:w-0 after:bg-stone-900
              after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.replace("-", " ")}
            </a>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gradient-to-b from-blue-500 to-cyan-500 px-6 pb-6 space-y-4 text-center">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              className="block text-white text-lg font-medium hover:text-stone-900 transition"
            >
              {item.replace("-", " ")}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
