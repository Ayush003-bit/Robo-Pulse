
 import React from "react";
import { Bot, Cpu, Brain } from "lucide-react";

export function CourseOverview() {
  const programs = [
    {
      id: 1,
      name: "Robopulse",
      description:
        "A modular kit designed with mechanical elements that encourages creativity in children, enabling them to build and design models of their own choice."
    },
    {
      id: 2,
      name: "Advance Robopulse",
      description:
        "An advanced version of the Robopulse kit equipped with electronic components. This kit allows children to create models using a wide range of electronic parts, enhancing their understanding of electronics and coding."
    },
    {
      id: 3,
      name: "Microbit",
      description:
        "A microcontroller-based kit that introduces children to the basics of programming and enables them to create various models, including robotics projects, fostering hands-on learning experiences."
    },
    {
      id: 4,
      name: "Robopulse Star",
      description:
        "Featuring a programmable Arduino microcontroller, this kit is designed to help children learn programming using the Arduino IDE. It helps in building solid foundations in coding and electronics."
    },
    {
      id: 5,
      name: "RP Star",
      description:
        "The RP Star Robotics Kit offers children the opportunity to learn about various types of sensors and modules. With this kit, they can create robots of their choice using Arduino and Microbit connections."
    },
    {
      id: 6,
      name: "RP Expert",
      description:
        "The RP Expert Robotics Kit empowers children to learn about various types of sensors and modules while exploring a range of microcontrollers."
    },
    {
      id: 7,
      name: "Raspberry Pi",
      description:
        "Raspberry Pi is a compact, affordable single-board computer designed to promote computer science education and programming skills."
    },
    {
      id: 8,
      name: "AI, IoT & ML (Neural Network)",
      description:
        "This course explores the integration of IoT, Machine Learning, and Artificial Intelligence through neural networks."
    }
  ];

  return (
    <>
      <div className="bg-gray-50 py-16 px-4">

         <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        Courses Overview
      </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((item) => (
            <div key={item.id}>
              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group h-full">

                {/* Icon */}
                <div className="w-14 h-14 mb-5 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  {item.id <= 3 ? (
                    <Bot className="w-7 h-7" />
                  ) : item.id <= 6 ? (
                    <Cpu className="w-7 h-7" />
                  ) : (
                    <Brain className="w-7 h-7" />
                  )}
                </div>

                <p className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                  {item.name}
                </p>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CourseOverview;
