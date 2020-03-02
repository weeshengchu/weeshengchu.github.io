import React from "react";
import { useSpring, animated } from "react-spring";
import Button from "react-bootstrap/Button";

// 6. npm install react-spring
function CardInfo(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div align="center">
      <animated.div className="g-card-info" style={style}>
        <p className="g-card-title">{props.title}</p>
        <p className="g-card-sub-title">{props.subTitle}</p>
        {/* Button color */}
        <Button
          variant="primary"
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </Button>
      </animated.div>
    </div>
  );
}

export default CardInfo;
