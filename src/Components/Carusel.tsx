import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Carousel, Radio } from "antd";
import type { DotPosition } from "antd/es/carousel";

const contentStyle: React.CSSProperties = {
  width: "100%",
  objectFit: "cover",
  height: "260px",
};

const Carusel: React.FC = () => {
  return (
    <div className="flex gap-2">
      <Carousel
        style={{ width: "700px" }}
        dotPosition={"bottom"}
        autoplay
        autoplaySpeed={2000}
        pauseOnDotsHover
      >
        <div>
          <img
            style={contentStyle}
            src="../../public/images/Carusel-1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            style={contentStyle}
            src="../../public/images/Carusel-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            style={contentStyle}
            src="../../public/images/Carusel-3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            style={contentStyle}
            src="../../public/images/Carusel-4.jpg"
            alt=""
          />
        </div>
      </Carousel>
      <div style={{ width: "50%", display: "inline-block" }}>
        <img src="../../public/images/konstavar.jpg" alt="" />
      </div>
    </div>
  );
};

export default Carusel;
