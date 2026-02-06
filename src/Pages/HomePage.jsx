
  import React from "react";
  import Navbar from "../Components/Navbar";
  import Hero from "../Components/Hero"
  import About from "../Components/AboutUs";
  import Services from "../Components/Services";

  export function Home() {
       return(
          <>
          
          <Navbar/>
          <Hero/>
          <About/>
          <Services/>

          
          </>
       )
  }


  export default Home