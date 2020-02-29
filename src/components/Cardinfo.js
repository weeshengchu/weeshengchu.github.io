import React from "react";
import { useSpring, animated } from "react-spring";
import Button from "react-bootstrap/Button";
function CardInfo(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className="g-card-info" style={style}>
      <p className="g-card-title">{props.title}</p>
      <p className="g-card-sub-title">{props.subTitle}</p>
      <Button
        variant="info"
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Live Demo
      </Button>
    </animated.div>
  );
}

export default CardInfo;
