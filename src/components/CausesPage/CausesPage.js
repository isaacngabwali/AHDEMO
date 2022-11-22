import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CausesSingle from "../CausesOne/CausesSingle";

const CausesPage = () => {
  return (
    <section className="causes-one causes-page">
      <Container>
        <Row>
            <Col>
              <CausesSingle />
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CausesPage;
