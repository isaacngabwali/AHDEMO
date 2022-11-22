import Link from "next/link";
import { React, useState } from "react";
import { Col, Image } from "react-bootstrap";
import { useFetch } from "../../hooks/useSWR";

const SingleNews = () => {
      // SWR call for all permissions
      const { GetBlogs } = useFetch();
      const { data: blogs } = GetBlogs();
    
      console.log("index - response", blogs);
      const [readMore, setReadMore] = useState(false);

  return (
    <Col xl={4} lg={4} className="animated fadeInUp">
    {blogs?.map((blogs) => (
      <div className="news-two__single" key={blogs.post_id}>
        <div className="news-two__img-box">
          <div className="news-two__img">
            <Image src={blogs.post_featured_image} alt="" />
            <Link href="/news-details">
              <a>
                <i className="fa fa-plus"></i>
              </a>
            </Link>
          </div>
          <div className="news-two__date">
            <p>{blogs.post_created_at}</p>
          </div>
        </div>
        <div className="news-two__content">
          <ul className="list-unstyled news-two__meta">
            <li>
              <a href="#">
                <i className="far fa-user-circle"></i> {blogs.post_auther}
              </a>
            </li>
            <li>
              <span>/</span>
            </li>
            <li>
              <a href="#">
                <i className="far fa-comments"></i> 5 Comments
              </a>
            </li>
          </ul>
          <h3>
            <Link href="/news-details">{blogs.post_title}</Link>
          </h3>
          <p className="news-two__text">{readMore ? blogs.post_description : `${blogs.post_description.substring(0, 300)}...`}{<button className="btn" onClick={() => setReadMore(!readMore)}>
        {readMore ? "show less" : "  Read More..."}
      </button>}</p>
        </div>
      </div>
                   ))}
    </Col>
  );
};

export default SingleNews;
