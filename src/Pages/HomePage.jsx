
  import React from "react";
  import Navbar from "../Components/Navbar";
  import HeroSection from "../Components/Hero"
  import About from "../Components/AboutUs";
  import Services from "../Components/Services";
  import Products from "../Components/OurProducts";
  import Mission from "../Components/Mission-Vision";
  import Team from "../Components/OurTeam"
  import CourseOverview from "../Components/CourseOverview";
  import Gallery from "../Components/Gallery";
  import ContactSection from "../Components/ContactUs";
  import Footer from "../Components/Footer";

  export function Home() {
       return(
          <>
          
          <Navbar/>
          <section id="home" className="scroll-mt-24"><HeroSection /></section>
          <section id="about" className="scroll-mt-24"><About /></section>
          <section id="services" className="scroll-mt-24"><Services /></section>
           <section id="products" className="scroll-mt-24"><Products /></section>
         <section id="mission" className="scroll-mt-24"><Mission /></section>
          <section id="team" className="scroll-mt-24"><Team /></section>
         <section id="courses" className="scroll-mt-24"><CourseOverview/></section>
          <section id="gallery" className="scroll-mt-24"><Gallery /></section>
         <section id="contact" className="scroll-mt-24"><ContactSection/></section>
         <Footer/>

          
          </>
       )
  }


  export default Home