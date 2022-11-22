// import galleryPageData from "@/data/galleryPageData";
import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleGallery from "./SingleGallery";

const GalleryPage = () => {
  return (
    <section className="gallery-page">
      <Container>
        <Row>
            <SingleGallery />
        </Row>
      </Container>
    </section>
  );
};

export default GalleryPage;
