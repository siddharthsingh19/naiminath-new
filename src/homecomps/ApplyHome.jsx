import React, { useEffect, useState } from "react";
import "./applyHome.css";
import ShowModal from "./modal/ShowModal";

const counters = [
  { num: "5, 76,000 +", val: "Patients Treated" },
  { num: "100+", val: "Research Publications" },
  { num: "3+", val: "Best College Awards" },
];

const ApplyHome = () => {
  const [showModal, setshowModal] = useState(false)
  const closeModal = () => setshowModal(false)

  if (showModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }


  const [visitCount, setVisitCount] = useState(16);
  const generateUniqueId = () => Math.random().toString(36)

  useEffect(() => {
    const uniqueId = localStorage.getItem('uniqueId');
    // if (!uniqueId) {
    const newUniqueId = generateUniqueId();
    localStorage.setItem('uniqueId', newUniqueId);
    const currentCount = localStorage.getItem('visitCount') || 0;
    const newCount = parseInt(currentCount) + 1;
    localStorage.setItem('visitCount', newCount);
    setVisitCount(newCount);
    // } else {
    //   const currentCount = localStorage.getItem('visitCount');
    //   setVisitCount(currentCount);
    // }
  }, []);



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
          <div className="count">

            <div className="count-num">{visitCount}</div>
            <div className="count-val">Total Visit</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyHome;
