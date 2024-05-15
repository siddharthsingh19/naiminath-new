import React from "react";
import "./testimonialHome.css";

const review = [
  {
    name: "Rohini Rajpoot",
    review:
      "The faculty at NAMC are not only experts in Ayurveda but also dedicated mentors who guide students with personalised attention, nurturing their growth and development.",
    img: "",
    time: "2 months ago",
  },
  {
    name: "Mamta Gupta",
    review:
      "Students at NAMC benefit from a rich learning environment that combines ancient wisdom with modern scientific research, preparing them to become compassionate and knowledgeable healers.",
    img: "",
    time: "2 months ago",
  },
  {
    name: "Mukesh Sharma",
    review:
      "Beautiful place, very good faculty and administration, they need to upgrade hospital facilities",
    img: "",
    time: "a month ago",
  },
  {
    name: "Seema Jain",
    review:
      "Great medical college infrastructure with all modern amenities. Hospitals is too good and panchkarma is best. Doctors are good and helpful. Ambience is peaceful. Good faculty for teaching students.",
    img: "",
    time: "2 years ago",
  },
];

const Reviews = ({ name, time, review }) => {
  return (
    <div>
      <div className="written-wrapper">
        <div className="written">
          <div className="rname">{name}</div>
          <div className="rtime">{time}</div>
          <div className="rreview">{review}</div>
        </div>
      </div>
    </div>
  );
};

const testimonials = [
  {
    divtoshow: (
      <iframe
        width="400"
        height="220"
        src="https://www.youtube.com/embed/wlOJYMW13zc?si=5AGeTamc7fjsITl5"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    divtoshow: (
      <Reviews
        name={review[0].name}
        review={review[0].review}
        time={review[0].time}
      />
    ),
  },
  {
    divtoshow: (
      <Reviews
        name={review[1].name}
        review={review[1].review}
        time={review[1].time}
      />
    ),
  },
  {
    divtoshow: (
      <Reviews
        name={review[2].name}
        review={review[2].review}
        time={review[2].time}
      />
    ),
  },
  {
    divtoshow: (
      <Reviews
        name={review[3].name}
        review={review[3].review}
        time={review[3].time}
      />
    ),
  },
  {
    divtoshow: (
      <iframe
        width="400"
        // width="560"
        height="220"
        src="https://www.youtube.com/embed/7_s8wssOzuc?si=P2ei7T5c5TkDGBPt"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    ),
  },
];

const TestimonialHome = () => {
  return (
    <>
      <div className="testimonial-container">
        <div className="why-wrapper">
          <h3 className="why-heading">What our students say about us</h3>
          <hr className="hr" />
          <div className="testimonials">
            {testimonials.map((test, index) => (
              <div className="testimonial">{test.divtoshow}</div>
            ))}
          </div>
          <button className="btns hero-btn rest-btns">
            More Naiminath Reviews
          </button>
        </div>
      </div>
    </>
  );
};

export default TestimonialHome;
