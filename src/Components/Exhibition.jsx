
  import React, { useRef, useState } from "react"

import Exbhi1 from "../assets/Exhbi1.mp4"
import Exbhi2 from "../assets/Exbhi2.mp4"
import Exbhi3 from "../assets/Exbhi3.mp4"
import Exbhi4 from "../assets/Exbhi4.mp4"

export function Exhibition () {

      const videoRef = useRef([]);
      const [activeVideo, setActiveVideo] = useState(null);

         const handlePlay = (index) =>{
               if(activeVideo !== null || activeVideo !== index) {
                   videoRef.current[activeVideo]?.pause();  
               }

               setActiveVideo(index);
         }

    const videos = [
        { id: 1, video: Exbhi1 },
        { id: 2, video: Exbhi2 },
        { id: 3, video: Exbhi3 },
        { id: 4, video: Exbhi4 }
    ]

    return(
        <div className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-16">

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-10 tracking-tight">
                Exhibition Video
            </h1>

            <div className="flex flex-wrap justify-center gap-6 lg:gap-8">

                {
                    videos.map((item)=> (
                        
                        <div 
                            key={item.id}
                            className="
                                group
                                w-full
                                sm:w-[48%]
                                lg:w-[23%]
                                rounded-2xl
                                overflow-hidden
                                shadow-md
                                hover:shadow-2xl
                                transition-all
                                duration-500
                                bg-white
                            "
                        >

                            <div className="w-full h-64 sm:h-72 lg:h-80 overflow-hidden">
                                <video 
                                    src={item.video} 
                                    controls 
                                    className="
                                        w-full 
                                        h-full 
                                        object-cover 
                                        transition-transform 
                                        duration-500 
                                        group-hover:scale-105
                                    "

                                    ref={(el)=> videoRef.current[item.id] = el}
                                    onPlay={()=> handlePlay(item.id)}
                                    onEnded={()=> setActiveVideo(null)}
                                />
                            </div>

                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default Exhibition
