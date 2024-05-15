import React from "react";
import "./eventsHome.css";
import events from "../events";

const EventsHome = () => {
  const sortedData = events.sort((a, b) => new Date(b.date) - new Date(a.date));

  console.log(sortedData);
  const latestThree = sortedData.slice(0, 3);

  return (
    <div className="events-home">
      <div className="why-wrapper">
        <h3 className="why-heading">Upcoming Events</h3>
        <hr className="hr" />
        <div className="eventTiles">
          {latestThree.map((event, index) => (
            <div>
              {event.latest && (
                <div
                  className="latest-tile"
                  style={{
                    backgroundImage: `url(${event.img})`,
                    backgroundColor: "#3f3f3f8f",
                  }}
                >
                  <div className="ledate">{event.date}</div>
                  <div className="ldesc">
                    <div className="letitle">{event.title}</div>
                    <div className="letime">{event.time}</div>
                  </div>
                </div>
              )}
              {!event.latest && (
                <div className="rest-tiles">
                  <img src={event.img} alt="" className="tile-image" />
                  <div className="redate">{event.date}</div>
                  <div className="redesc">
                    <div className="retitle">{event.title}</div>
                    <div className="retime">{event.time}</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <button className="btns hero-btn more-btns rest-btns">
          More Naiminath Events
        </button>
      </div>
    </div>
  );
};

export default EventsHome;
