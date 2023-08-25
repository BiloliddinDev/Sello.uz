import React from "react";
import Cart from "./Cart";
import { useNavigate } from "react-router-dom";

const data = [1, 2, 4, 5, 6, 7, 8, 9, 10];

const Carts = () => {
  const nav = useNavigate();
  return (
    <div className="flex flex-wrap">
      {data.map((e: number, i: number) => (
        <Cart key={e} click={() => nav(`/detel/${e}`)} />
      ))}
    </div>
  );
};

export default Carts;
