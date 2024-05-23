import React, { useState } from "react";
import "./hero.css";
import ShowModal from "./modal/ShowModal";

const Hero = () => {

  const [showModal, setshowModal] = useState(false)
  const closeModal = () => setshowModal(false)

  if (showModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <section className="hero">
      <div className="hero-wrapper">
        <div class="element">
          <div class="content" style={{ color: "#eef1f2" }}>
            {/* <div class="content" style={{ color: "black" }}> */}
            <h2 className="hero-heading">
              Discover The World of Possibilities with Naiminath
            </h2>
            <p className="hero-para">APPLICATIONS ARE NOW OPEN</p>
            <button className="btns hero-btn" onClick={() => setshowModal(!showModal)}>Apply Now</button>
          </div>
          {showModal && <ShowModal closeModal={closeModal} />}
        </div>
      </div>
    </section>
  );
};

export default Hero;
