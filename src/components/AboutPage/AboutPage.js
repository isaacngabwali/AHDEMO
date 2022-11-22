import aboutProgress from "@/data/aboutProgress";
import image from "@/images/resources/about-page-img-1.jpg";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import AboutProgressbar from "./AboutProgressbar";
import { useFetch } from "../../hooks/useSWR";

const AboutPage = () => {
        // SWR call for all permissions
        const { GetAbout } = useFetch();
        const { data: about } = GetAbout();
        console.log(about);
  return (
    <section className="about-page">
      <Container>
      {about?.map((about) => (
        <Row key={about.about_id}>
          <Col xl={6}>
            <div className="about-page__left">
              <div className="about-page__img">
                <Image src={about.about_image} alt="" />
                <div className="about-page__trusted">
                  <h3>
                    <span>{about.about_image_hint}</span>
                  </h3>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="about-page__right">
              <div className="section-title text-left">
                <span className="section-title__tagline">About African Hearts Community Organization</span>
                <h2 className="section-title__title">
                {about.about_header}
                </h2>
              <h3 className="about-page__right-title">
              {about.about_title}
              </h3>
              </div>
              <p className="about-page__right-text">
              {about.about_body}
              </p>
            </div>
          </Col>
        </Row>
            ))}
      </Container>
    </section>
  );
};

export default AboutPage;
