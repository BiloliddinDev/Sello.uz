import React from "react";
import { bootomdata } from "../Constants";
import { bootomtype } from "../Interface";

const Bottom = () => {
  return (
    <div
      style={{ marginTop: "20px" }}
      className="flex justify-between container items-center"
    >
      {bootomdata.map((e: bootomtype) => (
        <div className="hover:text-color" key={e.id}>
          <h2>{e.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Bottom;
