import React from "react";
import Hero from "./Hero";
import AboutHome from "./AboutHome";
import ContactHome from "./ContactHome";
import EventsHome from "./EventsHome";
import NewsHome from "./NewsHome";
import TestimonialHome from "./TestimonialHome";
import GalleryHome from "./GalleryHome";
import ApplyHome from "./ApplyHome";
import WhyChoose from "./WhyChoose";
import Youtube from "./Youtube";
import Whatsapp from "./whatsapp/Whatsapp";
import BlogsHome from "./BlogsHome";
import SocialPost from "./SocialPost";
const Home = () => {
  // useEffect(() => {
  //   // Function to handle scroll event
  //   const handleScroll = () => {
  //     // Get all sections
  //     const sections = document.querySelectorAll(".section");

  //     // Iterate through each section
  //     sections.forEach((section, index) => {
  //       // Calculate the distance between the top of the section and the top of the viewport
  //       const distanceToTop = section.getBoundingClientRect().top;

  //       // If the distance to the top of the section is less than or equal to 0 (i.e., it's in view or above the viewport)
  //       if (distanceToTop <= 0) {
  //         // If the next section exists
  //         if (sections[index + 1]) {
  //           // Scroll to the next section
  //           sections[index + 1].scrollIntoView({ behavior: "smooth" });
  //         }
  //       }
  //     });
  //   };

  //   // Add scroll event listener to the window
  //   window.addEventListener("scroll", handleScroll);

  //   // Remove event listener on component unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      <Hero />
      <AboutHome />
      <WhyChoose />
      <Youtube />
      <EventsHome />
      {/* <NewsHome /> */}
      <TestimonialHome />
      <SocialPost />
      <BlogsHome />
      <ApplyHome />
      {/* <GalleryHome /> */}
      {/* <ContactHome /> */}
      <Whatsapp />
    </div>
  );
};

export default Home;
