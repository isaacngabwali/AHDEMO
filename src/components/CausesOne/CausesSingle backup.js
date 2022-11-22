import Link from "next/link";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import ReactVisibilitySensor from "react-visibility-sensor";
import { useFetch } from "../../hooks/useSWR";

const CausesSingle = ({ donations = {}, causePage }) => {
      // SWR call for all permissions
      const { GetCauses } = useFetch();
      const { data: cause } = GetCauses();
    
      console.log("index - response", cause);
  const [countStart, setCountStart] = useState(false);
  const [readMore, setReadMore] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };
 //
//
  const raisedNumber = 0;
  const goalNumber = 50000;
  const percent = Math.round((raisedNumber / goalNumber) * 100);

  return (
        <div className={causePage ? "" : "my-4"} >
          {cause?.map((causes) => (
          <div
            style={causePage ? {} : { userSelect: "none" }}
            className="causes-one__single animated fadeInLeft"
            key={causes.cause_id}
          >


            <div className="causes-one__img">
              <div className="causes-one__img-box">
                <Image
                  src={causes.cause_image}
                  alt=""
                  height='150px'
                />
                <Link href="/causes-details">
                  <a>
                    <i className="fa fa-plus"></i>
                  </a>
                </Link>
              </div>
              <div className="causes-one__category">
                <span>{causes.cause_catergory}</span>
              </div>
            </div>
            <div className="causes-one__content">
              <h3 className="causes-one__title">
                <Link href="/causes-details">{causes.cause_title}</Link>
              </h3>
              <p className="causes-one__text">{readMore ? causes.cause_description : `${causes.cause_description.substring(0, 200)} ....`} <button className="btn" onClick={() => setReadMore(!readMore)}>
        {readMore ? "show less" : "  Read More..."}
      </button></p>
            </div>
            <div className="causes-one__progress">
              <ReactVisibilitySensor
                offset={{ top: 10 }}
                delayedCall={true}
                onChange={onVisibilityChange}
              >
                <div className="bar">
                  <div
                    className="bar-inner count-bar"
                    data-percent={`${countStart ? percent : 0}%`}
                    style={{ width: `${countStart ? percent : 0}%`, opacity: 1 }}
                  >
                    <div className="count-text" style={{ opacity: 1 }}>
                      {countStart ? percent : 0}%
                    </div>
                  </div>
                </div>
              </ReactVisibilitySensor>
              <div className="causes-one__goals">
                <p>
                  <span>${causes.cause_raised}</span> Raised
                </p>
                <p>
                  <span>${causes.cause_goal}</span> Goal
                </p>
              </div>
            </div>
          </div>
             ))}
        </div>
  );
};

export default CausesSingle;
