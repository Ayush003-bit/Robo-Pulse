
  import React from "react"
  import Product1 from "../assets/Product1.png"
  import Product2 from "../assets/Product2.png"

  export function Products() {

    const products = [
        {

            img: Product1,
            title: "RP Star",
            content: "The ultimate toolkit for nurturing creativity in budding robotics. Children can build innovative robotics models using microcontrollers, sensors, and motors, sparking their passion for hands-on learning and problem-solving in the world of robotics."

            
        },

        {
            img: Product2,
            title: "RP Expert",
            content: "The ultimate challenge for robotics enthusiasts, this kit offers over 850+ parts, providing endless possibilities for creating advanced robotics models. It’s the dream kit for those who aspire to excel in the field of robotics, pushing the boundaries of their creativity and engineering skills."
        }
    ]

       

        return(
              <>

               <h1 className="text-center text-gray-700 font-bold text-4xl mb-4">Our Products</h1>

              <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-6 md:px-16 py-16 bg-linear-to-b from-gray-100 to-gray-100">

               

        {products.map((item, index) => (
          <div
            key={index}
            className="group max-w-sm bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden
            transform transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
          >

            {/* Image */}
            <div className="flex justify-center bg-linear-to-tr from-gray-200 to-gray-200 p-4">
              <img
                src={item.img}
                alt={item.title}
                className=" w-full h-48 object-cover rounded-2xl transition duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <h1 className="text-2xl font-bold text-stone-900 tracking-wide mb-4">
                {item.title}
              </h1>

              <p className="text-stone-800 text-sm leading-relaxed">
                {item.content}
              </p>
            </div>

          </div>
        ))}

      </div>

                
              </>
        )
  }


  export default Products