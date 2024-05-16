import React from "react";
import "./youtube.css";
import { FaPlay } from "react-icons/fa6";

const Youtube = () => {
  return (
    <div className="yt-sec">
      <div className="yt-sec-wrapper">
        <div className="yt-sec-left">
          <h3 className="yt-head">
            We're Naiminath <br /> <strong>& We're Different</strong>
          </h3>
          <p className="yt-p">
            WE ARE MAKING LEARNING MORE RELEVANT AND TRANSFORMATIONAL.
          </p>
        </div>
        <div className="play-button-container">
          <div className="icon-container">
            <div className="yt-sec-right">
              <div className="border-grow">
                <a href="https://www.youtube.com/@nhmcagra" target="_blank">
                  <FaPlay className="play-icon" size={80} color="red" />
                </a>
                <div className="pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
