import { mainSliderCounter } from "@/data/mainSliderData";
import React, { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import { useFetch } from "../../hooks/useSWR";

const SliderCounter = () => {
        // SWR call for all permissions
        const { GetCounter } = useFetch();
        const { data: counter } = GetCounter();
      
        console.log("index - response", counter);
  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };

  return (
    <div className="main-slider__counter">
      <ul className="main-slider__counter-box list-unstyled">
      {counter?.map((counter) => (
          <li key={counter.counter_id}>
            <h3 className="main-sldier__counter-digit">
              <ReactVisibilitySensor
                offset={{ top: 10 }}
                delayedCall={true}
                onChange={onVisibilityChange}
              >
                <CountUp start={0} end={countStart ? counter.counter_figures : 0} duration={2} />
              </ReactVisibilitySensor>
            </h3>
            <span className="main-slider__counter-text">{counter.counter_title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SliderCounter;
