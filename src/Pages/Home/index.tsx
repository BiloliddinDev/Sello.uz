import React from "react";
import Carusel from "../../Components/Carusel";
import Showcase from "../../Components/Showcase";
import Categ from "../../Components/Categ";
import Info from "../../Components/Info";
import Carts from "../../Components/Carts";

const Home = () => {
  return (
    <div className="mt-[20px]">
      <div className="container">
        <Carusel />
        <Carts />
        <Categ />
        <Showcase />
        <Info />
      </div>
    </div>
  );
};

export default Home;
