import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Carousel, Radio } from "antd";
import type { DotPosition } from "antd/es/carousel";

const contentStyle: React.CSSProperties = {
  height: "260px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#00b3a8",
};

const Carusel: React.FC = () => {
  return (
    <>
      <Carousel
        dotPosition={"bottom"}
        autoplay
        autoplaySpeed={2000}
        pauseOnDotsHover
      >
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </>
  );
};

export default Carusel;
