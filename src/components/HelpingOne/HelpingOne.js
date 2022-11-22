import image from "@/images/resources/helping-one-left-img.jpg";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useFetch } from "../../hooks/useSWR";

const HelpingOne = () => {
            // SWR call for all permissions
            const { GetDonate } = useFetch();
            const { data: donate } = GetDonate();
  return (
    <section className="helping-one">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">Latest Causes</span>
          <h2 className="section-title__title">
            Find the popular cause <br />
            and donate them
          </h2>
        </div>
            {donate?.map((donate) => (
        <Row key={donate.donateoverview_id}>
          <Col xl={8} lg={8}>
            <div className="helping-one__left">
              <h3 className="helping-one__title">
                {donate.donateoverview_header}
              </h3>
              <p className="helping-one__text">
              {donate.donateoverview_body}
              </p>
              
              <div className="helping-one__left-img">
                <Image src={donate.donateoverview_image} alt="" />
                <div className="helping-one__left-icon-box">
                  <span className="icon-heart"></span>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={4} lg={4}>
            <div className="helping-one__right">
            <iframe src="https://global-development-group-project.raisely.com/embed/j902n-african-hearts-uganda?projectNum=J902N&amp;projectName=African%20Hearts%20Uganda" width="250" height="700"></iframe>
            </div>
          </Col>
        </Row>
            ))}
      </Container>
    </section>
  );
};

export default HelpingOne;
