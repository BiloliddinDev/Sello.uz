import React from "react";
import { childrentype } from "../Interface";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const Layouts = ({ children }: childrentype) => {
  return (
    <div>
      <Nav />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layouts;
