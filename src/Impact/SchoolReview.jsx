
  import React from "react"
import { useRef, useState } from "react"

import Vid1 from "../assets/School-Video/S-vid1.mp4"
import Vid2 from "../assets/School-Video/S-vid2.mp4"
import Vid3 from "../assets/School-Video/S-vid3.mp4"
import Vid4 from "../assets/School-Video/S-vid4.mp4"
import Vid5 from "../assets/School-Video/S-vid5.mp4"

export function SchoolReview() {

   const videoRef = useRef([]);
   const [activeVideo, setActiveVideo] = useState(null);

   const handlePlay = (index) => {
      if (activeVideo !== null && activeVideo !== index) {
         videoRef.current[activeVideo]?.pause();
      }
      setActiveVideo(index);
   }

   const schooldata = [
      {
         id: 1,
         video: Vid1,
         description: "Robopulse brings hands-on robotics learning directly to schools, empowering students to build, code, and innovate."
      },
      {
         id: 2,
         video: Vid2,
         description: "Our specialized robotics camp introduces students to automation, artificial intelligence, and smart technologies in an exciting and practical way."
      },
      {
         id: 3,
         video: Vid3,
         description: "Robopulse integrates robotics into the school curriculum to make STEM learning more engaging and experiential."
      },
      {
         id: 4,
         video: Vid4,
         description: "We prepare students for inter-school and national robotics competitions by providing structured training, project guidance, and technical expertise."
      },
      {
         id: 5,
         video: Vid5,
         description: "Robopulse transforms schools into innovation hubs by introducing smart robotics labs and experiential learning modules."
      }
   ]

   return (
      <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-6">

         <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            School Review
         </h1>

         {/* FLEX CONTAINER */}
         <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10">

            {
               schooldata.map((item) => (

                  <div
                     key={item.id}
                     className="
                        w-full 
                        sm:w-[90%] 
                        md:w-[48%] 
                        lg:w-[31%]
                        bg-white 
                        rounded-2xl 
                        shadow-lg 
                        hover:shadow-2xl 
                        transition-all 
                        duration-500 
                        overflow-hidden 
                        group
                     "
                  >

                     <div className="relative overflow-hidden">

                        <video
                           src={item.video}
                           controls
                           className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                           ref={(el) => videoRef.current[item.id] = el}
                           onPlay={() => handlePlay(item.id)}
                           onEnded={() => setActiveVideo(null)}
                        />

                     </div>

                     <div className="p-6">
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                           {item.description}
                        </p>
                     </div>

                  </div>

               ))
            }

         </div>

      </div>
   )
}

export default SchoolReview
