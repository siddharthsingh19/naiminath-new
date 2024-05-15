import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-wrapper">
        <div class="element">
          <div class="content" style={{ color: "#eef1f2" }}>
            <h2 className="hero-heading">
              Discover The World of Possibilities with Naiminath
            </h2>
            <p className="hero-para">APPLICATIONS ARE NOW OPEN</p>
            <button className="btns hero-btn">Admissions</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
