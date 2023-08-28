import { Image } from "antd";
import React from "react";

const Cart = ({ click }: any) => {
  return (
    <div>
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Image
          height={300}
          width={"100%"}
          className="w-full object-cover object-center"
          src="../../public/images/naushnik.jpg"
          alt="blog"
        ></Image>
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            CATEGORY
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            The Catalyzer
          </h1>
          <p className="leading-relaxed mb-3">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </p>
          <div className="flex items-center">
            <a onClick={click} className="text-color flex items-center gap-2">
              Learn More
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <span className="text-gray-400 mr-3 flex gap-2 items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <i className="fa-solid fa-eye"></i>
              1.2K
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <i className="fa-solid fa-heart"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
