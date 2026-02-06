

   import React from "react";
import Logo from "../assets/Logo.png";

export function Navbar() {
  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 backdrop-blur-md shadow-lg">
        <div className="flex flex-wrap items-center justify-between px-6 md:px-12">

          {/* Logo */}
          <div className="flex items-center">
            <img
              className="h-16 w-16 md:h-20 md:w-20 rounded-full p-2 bg-white/20 hover:scale-105 transition duration-300"
              src={Logo}
              alt="Logo"
            />
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-4 gap-y-2 py-4 md:py-0 text-sm md:text-base">
            {[
              "Home",
              "About-Us",
              "Our-Services",
              "School-Program",
              "Our-Products",
              "Testimonial",
              "Team",
              "Composite-Skill-Lab",
              "Contact-Us",
            ].map((item, index) => (
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

        </div>
      </nav>
    </>
  );
}

export default Navbar;
