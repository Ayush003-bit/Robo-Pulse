import React from "react";
import { Target, Flag } from "lucide-react";

export function Mission() {
  const mission = [
    {
      id: 1,
      title: "Mission",
      misson:
        "We envision a future where robots and humans collaborate seamlessly, enhancing productivity, efficiency, and safety. Our goal is to make robotics accessible and beneficial to everyone",
    },
    {
      id: 2,
      title: "Vision",
      v1: "Provide a conducive learning environment for students to develop their AI skills.",
      v2: "Enhance digital literacy and promote technology integration in Education",
      v3: "Support academic and research activities.",
    },
  ];

  return (
    <div className="bg-gray-200 py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        Our Mission & Vision
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {mission.map((item) => (
          <div key={item.id}>
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">

              {/* Icon */}
              <div className="mb-5">
                {item.title === "Mission" ? (
                  <Target className="w-12 h-12 text-indigo-600 group-hover:scale-110 transition duration-300" />
                ) : (
                  <Flag className="w-12 h-12 text-emerald-600 group-hover:scale-110 transition duration-300" />
                )}
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {item.title}
              </h2>

              {/* Mission text */}
              {item.misson && (
                <p className="text-gray-600 leading-relaxed mb-4">
                  {item.misson}
                </p>
              )}

              {/* Vision list ONLY */}
              {item.v1 && (
                <ul className="space-y-3 text-gray-600 list-disc list-inside">
                  <li>{item.v1}</li>
                  <li>{item.v2}</li>
                  <li>{item.v3}</li>
                </ul>
              )}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mission;
