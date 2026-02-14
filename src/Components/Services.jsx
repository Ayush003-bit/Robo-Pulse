
 import React from "react";
 import Image1 from "../assets/Image1.png"
 import Image2 from "../assets/Image2.png"
 import Image3 from "../assets/Image3.png"
 import Image4 from "../assets/Image4.png"
 import Image5 from "../assets/Image5.png"
 import Image7 from "../assets/Image7.png"

 

export function Services() {

  const services = [
    {
      title: "Unique and modular design",
      description:
        "Our robotics kits offer a flexible, modular design that allows students to create any model. They can explore various designs and operate them using our electronic components and IT software for prototyping and hands-on learning.",
      image: Image1
        
    },
    {
      title: "Open Source Technology",
      description:
        "We use open source technologies, ensuring students learn what the world is embracing, not just proprietary systems. This encourages students to build skills that align with global standards.",
      image:Image2
        
    },
    {
      title: "Step by step student learning guide",
      description:
        "Every working model is taught with a clear, step-by-step approach, including both theoretical knowledge and practical construction. Our syllabus follows NEP (National Education Policy), focusing on AI and coding with research-based practicals. We also provide weekly onling classees for additional support.",
      image:Image3
        
    },
    {
      title: "Expert and Trained Trainers",
      description:
        "Our trainers are industry ready experts with vast experience. They are committed to delivering a high-quality education that prepares students for the future of robotics and AI.",
      image:Image4
        
    },
    {
      title: "Support for Students Growth",
      description:
        "We actively promote student participation in Robotics, AI and Coding by organizing events and competitions that encourage learning and innovation.",
      image:Image5
        
    },
    {
      title: "Robotics Lab Setup",
      description:
        "We help schools by installing computer system and providing all necessary robotics kits for that lab. Our kits are designed to be transparent, allowing students to easily identify each component. On average, three students can work on a single kit for hands-on experience.",
      image:Image7
        
    }
  ];

  return (
    <>
      <div className="w-full px-6 md:px-20 py-16 bg-gray-50">
           
             <h1 className=" text-center text-2xl md:text-4xl font-bold text-gray-900 mb-6">Our Services</h1>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {
            services.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Image */}
                <div className="h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h1 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h1>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Services;
