
  import React, { useState } from "react"
import Orientation from "../Impact/Orientation";
import SchoolReview from "../Impact/SchoolReview";

export function Impact() {

   const [activeSection, setActiveSection] = useState("school");

   return (
      <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-24">

         {/* Page Heading */}
         <div className="max-w-7xl mx-auto px-6 mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
               Impact
            </h1>
            <p className="text-gray-500 mt-2">
               Explore how our programs are transforming schools and educators.
            </p>
         </div>

         {/* Main Layout */}
         <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12">

            {/* Sidebar */}
            <div className="lg:w-1/4 w-full mb-4">

               <div className="bg-white rounded-2xl shadow-md p-6 sticky top-28">

                  <h2 className="text-lg font-semibold text-gray-700 mb-6">
                     Explore Sections
                  </h2>

                  <div className="space-y-4">

                     <div
                        onClick={() => setActiveSection("school")}
                        className={`cursor-pointer px-5 py-4 rounded-xl transition-all duration-300 border
                        ${activeSection === "school"
                              ? "bg-blue-600 text-white border-blue-600 shadow-lg scale-105"
                              : "bg-gray-50 text-gray-700 border-transparent hover:bg-blue-50 hover:text-blue-600 hover:scale-105"}
                        `}
                     >
                        School Reviews
                     </div>

                     <div
                        onClick={() => setActiveSection("orientation")}
                        className={`cursor-pointer px-5 py-4 rounded-xl transition-all duration-300 border
                        ${activeSection === "orientation"
                              ? "bg-blue-600 text-white border-blue-600 shadow-lg scale-105"
                              : "bg-gray-50 text-gray-700 border-transparent hover:bg-blue-50 hover:text-blue-600 hover:scale-105"}
                        `}
                     >
                        Orientation
                     </div>

                  </div>

               </div>

            </div>

            {/* Right Content Section */}
            <div className="lg:w-3/4 w-full">

               <div className="transition-all duration-500 ease-in-out">

                  {activeSection === "school" && <SchoolReview />}
                  {activeSection === "orientation" && <Orientation />}

               </div>

            </div>

         </div>

      </div>
   )
}

export default Impact
