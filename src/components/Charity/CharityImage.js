import img3 from "@/images/resources/welcome-one-heart-icon.png";
import img1 from "@/images/resources/welcome-one-img-1.jpg";
import img2 from "@/images/resources/welcome-one-img-2.jpg";
import React from "react";
import { Col, Image } from "react-bootstrap";
import { useFetch } from "../../hooks/useSWR";

const CharityImage = () => {
  
        // SWR call for all permissions
        const { GetHomepage } = useFetch();
        const { data: homepage } = GetHomepage();
      
        console.log("index - response", homepage);
  return (
    <Col xl={6} lg={6}>
     {homepage?.map((homepage) => (
      <div className="welcome-one__left" key={homepage.homepage_id}>
        <div className="welcome-one__img-box">
          <Image src={homepage.homepage_image} alt="" />
        </div>
      </div>
     ))}
    </Col>
  );
};

export default CharityImage;
