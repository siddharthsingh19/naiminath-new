import React, { useState } from "react";
import "./applyHome.css";
import ShowModal from "./modal/ShowModal";

const counters = [
  { num: 3570, val: "Students" },
  { num: 170, val: "Research Publications" },
  { num: 3, val: "National Awards" },
  { num: 150, val: "Top Instructors and Experts" },
];

const ApplyHome = () => {
  const [showModal, setshowModal] = useState(false)
  const closeModal = () => setshowModal(false)

  if (showModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }


  return (
    <div className="applyHome">
      <div className="apply-box">
        <div className="apply-sec">
          <h3 className="why-heading">Apply for Admissions</h3>
          <hr className="hr" />
          <p className="applyp">
            At Naiminath Ayurvedic Medical College we don’t expect intelligence
            to come in any particular shape or form. We’re looking for future
            students who are inquisitive, passionate, original and determined to
            grow.
          </p>
          <button className="btns hero-btn rest-btns" onClick={() => setshowModal(!showModal)}>Apply Now</button>
        </div>
        {showModal && <ShowModal closeModal={closeModal} />}
      </div>
      <div className="counter">
        <div className="counts">
          {counters.map((item, index) => (
            <div className="count">
              <div className="count-num">{item.num}</div>
              <div className="count-val">{item.val}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplyHome;
