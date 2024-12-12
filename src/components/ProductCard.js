"use client";

import React, { useState } from "react";
import StarRating from "./StarRating"; 

function ProductCard({ product }) {
  const [color, setColor] = useState("Yellow");

  return (
    <div className="m-8 pl-7">
     <div className="w-64 h-64">
        <img
          src={product.images[color]}
          alt={product.name}
          style={{ borderRadius: "15px" }} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-montserrat_med  mt-4 text-left">
        {product.name}
      </h3>
      <p className="text-[15px] font-montserrat_reg   mt-2 text-left">
        ${product.price} USD
      </p>

      <div className="flex items-center space-x-2 mt-4 ">
        {Object.keys(product.images).map((key) => (
          <button
            key={key}
            className={`w-5 h-5 rounded-full ${
              key === "Yellow"
                ? "bg-yellowGold"
                : key === "White"
                ? "bg-whiteGold"
                : "bg-roseGold"
            } border ${color === key ? "outline outline-1 outline-offset-4" : ""}`}
            onClick={() => setColor(key)}
          ></button>
        ))}
      </div>
      <p
        className={`text-[14px] font-avenir  mt-1 `}
      >
        {color} Gold
      </p>
      <div className="flex items-center space-x-2 mt-2">
        <StarRating rating={product.popularity} />{" "}
        <p className="text-[14px] font-avenir ">
          {product.popularity}/5
        </p>
      </div>
    </div>
  );
}

export default ProductCard;

