import React from "react";
import { Image } from "react-bootstrap";
import { useFetch } from "../../hooks/useSWR";

const TestimonialSingle = ({ singleTestimonial }) => {
  const { name, description, category, image } = singleTestimonial;
        // SWR call for all permissions
        const { GetTestimonies } = useFetch();
        const { data: testimony } = GetTestimonies();
      
        console.log("index - response", testimony);
  return (
    <div>
                {testimony?.map((testimony) => (
    <div style={{ userSelect: "none" }} className="testimonial-one__single" key={testimony.testimony_id}>
      <p className="testimonial-one__text">{testimony.testimony_body}</p>
      <div className="testimonial-one__client-info">
        <div className="testimonial-one__client-img">
          <Image
            alt=""
            src={testimony.testimony_image}
          />
          <div className="testimonial-one__quote"></div>
        </div>
        <div className="testimonial-one__client-name">
          <h3>{testimony.testimony_name}</h3>
          <p>{testimony.testimony_title}</p>
        </div>
      </div>
    </div>
              ))}
  </div>
  );
};

export default TestimonialSingle;
