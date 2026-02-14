

  import React, { useState } from "react";
import Hero1 from "../assets/HeroImg1.jpg";
import Hero2 from "../assets/HeroImg2.jpg";
import Hero3 from "../assets/HeroImg3.jpg";
import Hero4 from "../assets/HeroImg4.jpg";

export default function HeroSection() {
  const images = [Hero1, Hero2, Hero3, Hero4];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">

       {/* Image */}
  <img
    src={images[current]}
    alt="Hero Background"
    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-linear-to-br from-black/70 via-black/60 to-black/80" />

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

     
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-wide leading-tight">
          <span className="text-cyan-400">ROBOPULSE</span> <br />
          <span className="text-gray-200">We Are For Innovation</span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl text-lg">
          Empowering the future with Artificial Intelligence, Robotics,
          and cutting-edge technological innovation.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex gap-6">
          <button
            onClick={prevSlide}
            className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-cyan-500 transition duration-300"
          >
            Prev
          </button>

          <button
            onClick={nextSlide}
            className="px-6 py-3 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition duration-300 shadow-lg"
          >
            Next
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex gap-3 mt-8">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                current === index ? "bg-cyan-400 scale-125" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
