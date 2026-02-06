
 import React from "react";
import Logo from "../assets/Logo.png";

export function Hero() {
  return (
    <>
      <div className="relative w-full h-[80vh] bg-gradient-to-b from-black via-stone-900 to-black flex items-center justify-center overflow-hidden">

        {/* Background Logo */}
        <img
          src={Logo}
          alt="Background Logo"
          className="absolute opacity-10 w-[300px] md:w-[420px] lg:w-[520px]"
        />

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-amber-400 font-extrabold text-4xl md:text-6xl tracking-widest">
            ROBOPULSE
          </h1>

          <p className="mt-6 text-xl md:text-3xl text-gray-200 font-light">
            WE ARE FOR{" "}
            <span className="text-white font-semibold tracking-wide">
              INNOVATION
            </span>
          </p>

          {/* Divider */}
          <div className="mx-auto mt-6 h-[2px] w-24 bg-amber-400"></div>
        </div>

      </div>
    </>
  );
}

export default Hero;
