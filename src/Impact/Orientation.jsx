
  import React from "react"
import OriImg1 from "../assets/Orientation/Ori-img1.jpg"
import OriImg2 from "../assets/Orientation/Ori-img2.jpg"
import OriImg3 from "../assets/Orientation/Ori-img3.jpg"
import OriImg4 from "../assets/Orientation/Ori-img4.jpg"
import OriImg5 from "../assets/Orientation/Ori-img5.jpg"
import OriVid1 from "../assets/Orientation/Ori-vid1.mp4"
import OriVid2 from "../assets/Orientation/Ori-vid2.mp4"
import { useRef, useState } from "react"

export function Orientation() {

   const VideoRef = useRef([]);
   const [activeVideo, setActiveVideo] = useState(null);

   const handlePlay = (index) => {
      if (activeVideo !== null && activeVideo !== index) {
         VideoRef.current[activeVideo]?.pause();
      }
      setActiveVideo(index);
   }

   const orientation = [
      {
         id: 1,
         img: OriImg1,
         decscrption: "The Robopulse Teacher’s Orientation Program equips educators with the knowledge and confidence to integrate robotics into everyday classroom learning."
      },
      {
         id: 2,
         img: OriImg2,
         decscrption: "Through live demonstrations and guided activities, teachers experience robotics from a learner’s perspective."
      },
      {
         id: 3,
         img: OriImg3,
         decscrption: "This session is designed to prepare teachers for the evolving world of STEM education."
      },
      {
         id: 4,
         img: OriImg4,
         decscrption: "Robopulse supports educators in aligning robotics with existing academic subjects like science, mathematics, and technology."
      },
      {
         id: 5,
         img: OriImg5,
         decscrption: "This orientation empowers teachers to become technology leaders within their institutions."
      },
   ]

   const orientationVid = [
      {
         id: 6,
         video: OriVid1,
         decscrption: "Teachers are introduced to structured robotics modules, assessment techniques, and classroom management strategies for tech-based sessions."
      },
      {
         id: 7,
         video: OriVid2,
         decscrption: "Beyond training, Robopulse provides ongoing mentorship and technical support to teachers."
      },
   ]

   return (
      <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-6">

         {/* Heading */}
         <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-14">
            Orientation
         </h1>

         {/* Image Section */}
         <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10">

            {
               orientation.map((item) => (
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

                     {/* Image */}
                     <div className="overflow-hidden">
                        <img
                           src={item.img}
                           alt=""
                           className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                     </div>

                     {/* Description */}
                     <div className="p-6">
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                           {item.decscrption}
                        </p>
                     </div>

                  </div>
               ))
            }

         </div>

         {/* Video Section Heading */}
         <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mt-20 mb-12">
            Orientation Video
         </h2>

         {/* Video Section */}
         <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10">

            {
               orientationVid.map((data) => (
                  <div
                     key={data.id}
                     className="
                        w-full 
                        sm:w-[90%] 
                        md:w-[48%] 
                        lg:w-[40%]
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

                     {/* Video */}
                     <div className="overflow-hidden">
                        <video
                           src={data.video}
                           controls
                           className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                           ref={(el) => VideoRef.current[data.id] = el}
                           onPlay={() => handlePlay(data.id)}
                           onEnded={() => setActiveVideo(null)}
                        />
                     </div>

                     {/* Description */}
                     <div className="p-6">
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                           {data.decscrption}
                        </p>
                     </div>

                  </div>
               ))
            }

         </div>

      </div>
   )
}

export default Orientation
