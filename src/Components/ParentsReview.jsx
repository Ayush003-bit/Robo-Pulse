
  import React from "react"

import Review1 from "../assets/Review1.jpeg"
import Review2 from "../assets/Review2.jpeg"
import Review3 from "../assets/Review3.jpeg"
import Review4 from "../assets/Review4.jpeg"

export function Review() {

    const review = [
        { id: 1, img: Review1 },
        { id: 2, img: Review2 },
        { id: 3, img: Review3 },
        { id: 4, img: Review4 }
    ]

    return(
        <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-16">

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-10 tracking-tight">
                Parents Review
            </h1>

            <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
                {
                    review.map((item)=>(
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
                            "
                        >

                            <div className="w-full h-64 sm:h-72 lg:h-80 overflow-hidden">
                                <img 
                                    src={item.img} 
                                    alt={`Review ${item.id}`}
                                    className="
                                        w-full 
                                        h-full 
                                        object-cover 
                                        transform 
                                        group-hover:scale-105 
                                        transition-transform 
                                        duration-700 
                                        ease-in-out
                                    "
                                />
                            </div>

                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Review
