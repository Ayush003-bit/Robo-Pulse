
  import React from "react";
import Logo from "../assets/Logo.png";
import { Facebook, Instagram, Linkedin, Twitter, Heart, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-slate-900 to-blue-950 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Left Side */}
        <div className="flex flex-col items-start space-y-6">
          <img src={Logo} alt="Robopulse Intelligence" className="w-40 rounded-full" />

          {/* Social Icons */}
          <div className="flex space-x-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-blue-600 transition duration-300 transform hover:scale-110"
            >
              <Facebook size={20} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-pink-500 transition duration-300 transform hover:scale-110"
            >
              <Instagram size={20} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-blue-500 transition duration-300 transform hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
  
            <a
              href="https://robopulseintelli@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-sky-500 transition duration-300 transform hover:scale-110"
            >
              <Mail size={20} />
            </a>

          </div>


         



          <p className="text-gray-400 text-sm mt-4">
            © {new Date().getFullYear()} RoboPulse Intelligence. All rights reserved.
          </p>

          <p className="text-gray-400 text-sm mt-2">
 
  <span className="inline-flex items-center gap-1">
    Made with{" "} <Heart className="fill-red-500 text-red-500" size={20} />
   by <a href="https://www.mediafleetblue.com/">Media FleetBlue</a>
  </span>
  
</p>


           
        </div>

        {/* Right Side Links */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 md:justify-items-end text-left md:text-right">

          <ul className="space-y-3">
            <li className="hover:text-blue-400 cursor-pointer transition duration-300">About Us</li>
            <li className="hover:text-blue-400 cursor-pointer transition duration-300">Our Services</li>
            <li className="hover:text-blue-400 cursor-pointer transition duration-300">Our Products</li>
            <li className="hover:text-blue-400 cursor-pointer transition duration-300">Our Mission & Vision</li>
          </ul>

          <ul className="space-y-3">
            <li className="hover:text-blue-400 cursor-pointer transition duration-300">Our Team</li>
            <li className="hover:text-blue-400 cursor-pointer transition duration-300">Courses Overview</li>
            <li className="hover:text-blue-400 cursor-pointer transition duration-300">Our Gallery</li>
            <li className="hover:text-blue-400 cursor-pointer transition duration-300">Contact Us</li>
          </ul>

        </div>
      </div>
    </footer>
  );
}
