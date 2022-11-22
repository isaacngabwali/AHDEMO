import React, { useState } from "react";
import { Col } from "react-bootstrap";
import ReactVisibilitySensor from "react-visibility-sensor";
import { useFetch } from "../../hooks/useSWR";

const countBar = [
  {
    id: 1,
    title: "Charity",
    percent: 83,
  },
  {
    id: 2,
    title: "Donations",
    percent: 38,
  },
];

const CharityContent = () => {
        // SWR call for all permissions
        const { GetHomepage } = useFetch();
        const { data: homepage } = GetHomepage();
      
        console.log("index - response", homepage);
  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };

  return (
    <Col xl={6} lg={6}>
     {homepage?.map((homepage) => (
      <div className="welcome-one__right" key={homepage.homepage_id}>
        <div className="section-title text-left">
          <span className="section-title__tagline">Welcome to African Hearts Community Organisation</span>
          <h2 className="section-title__title">
          {homepage.homepage_header}
          </h2>
        </div>
        <p className="welcome-one__right-text">
        {homepage.homepage_about}
        </p>
        <div className="welcome-one__our-mission-and-story">
          <div className="welcome-one__mission-and-story-single">
            <h3>
              <i className="fas fa-arrow-circle-right"></i>Our Mission
            </h3>
            <p className="welcome-one__our-mission-and-story-text">
            {homepage.homepage_mission}
            </p>
          </div>
          <div className="welcome-one__mission-and-story-single">
            <h3>
              <i className="fas fa-arrow-circle-right"></i>Our Vision
            </h3>
            <p className="welcome-one__our-mission-and-story-text">
            {homepage.homepage_vision}
            </p>
          </div>
        </div>
        <a href="/about" className="welcome-one__btn thm-btn">
          <i className="fas fa-arrow-circle-right"></i>Read More
        </a>
      </div>
     ))}
    </Col>
  );
};

export default CharityContent;
