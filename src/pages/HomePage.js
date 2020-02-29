import React from "react";

import Hero from "../components/Hero";
import Carousel from "../components/Carousel";

function HomePage(props) {
  return (
    <div>
      {/* 5. Hero page */}
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
      {/* 6. Carousel page */}
      <Carousel></Carousel>
    </div>
  );
}

export default HomePage;
