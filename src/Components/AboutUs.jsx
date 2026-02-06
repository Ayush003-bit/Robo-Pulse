import React from "react"
import Image from "../assets/RoboImage2.png"

export function About() {

    const about = [
        {
            img: Image,
            data: "At Robopulse, we're passionate about revolutionizing schools through innovative robotics solutions. Our mission is to design, develop, and deploy cutting-edge robots that transform the way businesses operate and people live"
        }
    ]

    return (
        <>
            <div className="w-full px-5 md:px-20 py-16 bg-linear-to-b from-slate-50 to-white">
                {
                    about.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20"
                        >
                            {/* Image */}
                            <img
                                className="w-full md:w-105 drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-2xl"
                                src={item.img}
                                alt="About Robopulse"
                            />

                            {/* Content */}
                            <div className="text-center md:text-left max-w-xl">
                                <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 relative">
                                    About Us
                                    <span className="block w-20 h-1 bg-indigo-600 mt-3 mx-auto md:mx-0 rounded-full"></span>
                                </h1>

                                <p className="text-gray-600 text-xl leading-relaxed">
                                    {item.data}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default About
