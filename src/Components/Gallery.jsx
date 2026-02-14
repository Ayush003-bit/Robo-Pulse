
  import React from "react";
import Image1 from "../assets/RobopluseImg1.png";
import Image2 from "../assets/RoboPulseImg2.png";
import Image3 from "../assets/RoboPulseimg3.png";
import Image4 from "../assets/RobopulseImg4.png";
import Image5 from "../assets/RoboPulseImg5.png";

export function Gallery() {
  const gallery = [
    { id: 1, img: Image1 },
    { id: 2, img: Image2 },
    { id: 3, img: Image3 },
    { id: 4, img: Image4 },
    { id: 5, img: Image5 },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        Gallery
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {gallery.map((item) => (
          <div key={item.id}>
            <div className="overflow-hidden rounded-2xl shadow-md group cursor-pointer">

              <img
                src={item.img}
                alt="Gallery"
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
