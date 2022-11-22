import teamOne from "@/data/teamOne";
import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleTeamOne from "./SingleTeamOne";

const TeamOne = ({ className = "" }) => {
  return (
    <section className={`team-one ${className}`}>
      <Container>
        {!className && (
          <div className="section-title text-center">
            <span className="section-title__tagline">
            African Hearts Community Organization
            </span>
            <h2 className="section-title__title">
              Meet the best team behind <br /> Our Vision
            </h2>
          </div>
        )}
        <Row>
          <SingleTeamOne />
          
        </Row>
      </Container>
    </section>
  );
};

export default TeamOne;
