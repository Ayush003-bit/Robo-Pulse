
  import React from "react"

import Lab1 from "../assets/LabImg1.jpeg"
import Lab2 from "../assets/LabImg2.jpeg"
import Lab3 from "../assets/LabImg3.jpeg"
import Lab4 from "../assets/LabImg4.jpeg"
import Lab5 from "../assets/LabImg5.jpeg"

export function Lab(){

    const labImages = [
        { id: 1, img: Lab1 },
        { id: 2, img: Lab2 },
        { id: 3, img: Lab3 },
        { id: 4, img: Lab4 },
        { id: 5, img: Lab5 }
    ]

    return(
        <div className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-16 mt-20">

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-10 tracking-tight">
                Lab in Action
            </h1>

            <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
                
                {
                    labImages.map((item)=> (
                        <div 
                            key={item.id}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-2xl
                                shadow-md
                                hover:shadow-2xl
                                transition-all
                                duration-500
                                w-full
                                sm:w-[48%]
                                lg:w-[30%]
                            "
                        >
                            
                            <div className="w-full h-64 sm:h-72 lg:h-80 overflow-hidden">
                                <img 
                                    src={item.img} 
                                    alt={`Lab ${item.id}`}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                            </div>

                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default Lab
