
  import React from "react";
  import CEO from "../assets/CEO-Robopulse.jpeg"
  import CFO from "../assets/CFO-Robopulse.jpeg"
  import Dir from "../assets/Robopulse-DirImg.png"

export function Team() {
  const Team = [
    {
      id: 1,
      name: "Gaurav Sonkar",
      designation: "Chief Executive Officer",
      img: CEO,
      msg: "At Robopulse Intelligence, we're driven by innovation and passion. We're shaping the future of robotics, one intelligent machine at a time. Let's create something extraordinary together."
    },
    {
      id: 2,
      name: "Ashish Dubey",
      designation: "Chief Finance Officer",
      img: CFO,
      msg: "At Robopulse Intelligence, we balance innovation with financial prudence, ensuring sustainable growth and maximizing value for our stakeholders."
    },

    {
        id:3,
        name: "Sonali Khanna",
        designation: "Director",
        img: Dir,
        msg: "As Director of Robopulse Intelligence, I'm proud to lead a team of innovators passionate about revolutionizing industries with cutting-edge robotics solutions. We're committed to harnessing the power of AI and robotics to drive efficiency, productivity, and progress in India. Let's collaborate to shape a smarter, more sustainable future."
    }
  ];

  return (
    <div className="bg-gray-100 py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        Our Team
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
        {Team.map((item) => (
          <div key={item.id}>
            <div className="bg-white rounded-2xl p-8 text-center shadow-md border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group w-100 h-100">

              {/* Image */}
              <div className="w-20 h-20 mx-auto mb-5 rounded-full flex items-center justify-center  group-hover:scale-110 transition duration-300">
                    <img className="w-20 h-20 rounded-full" src={item.img} alt="" />
              </div>

              <p className="text-xl font-semibold text-gray-800 mb-1">
                {item.name}
              </p>

              <p className="text-gray-700 text-sm font-bold text-[12px]">
                {item.designation}
              </p>

              <p className="text-gray-500 text-sm pt-2">{item.msg}</p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
