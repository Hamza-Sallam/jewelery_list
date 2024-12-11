"use client";

import React, { useState } from "react";
import StarRating from "./StarRating"; 

function ProductCard({ product }) {
  const [color, setColor] = useState("yellow");

  return (
    <div className="bg-transparant rounded-lg p-4">
      <img
        src={product.images[color]}
        alt={product.name}
        className="h-48 object-contain"
      />
      <h3 className="font-montserrat_med text- [15px]  text-gray-800 mt-4 text-left">
        {product.name}
      </h3>
      <p className="font-montserrat_reg text- [15px]  text-gray-600 mt-2 text-left">
        ${product.price} USD
      </p>

      <div className="flex items-center space-x-2 mt-4 ">
        {Object.keys(product.images).map((key) => (
          <button
            key={key}
            className={`w-6 h-6 rounded-full ${
              key === "yellow"
                ? "bg-yellowGold"
                : key === "white"
                ? "bg-whiteGold"
                : "bg-roseGold"
            } border ${color === key ? "border-gray-800" : "border-gray-300"}`}
            onClick={() => setColor(key)}
          ></button>
        ))}
      </div>
      <p
        className={`text-left text-sm font-avenir text- [12px]  mt-1  ${
          color === "yellow"
            ? "text-yellowGold"
            : color === "white"
            ? "text-whiteGold"
            : "text-roseGold"
        }`}
      >
        {color.charAt(0).toUpperCase() + color.slice(1)} Gold
      </p>
      <div className="flex items-center space-x-2 mt-2">
        <StarRating rating={product.popularity} />{" "}
        <p className="text-sm font-avenir text- [14px] text-gray-500">
          {product.popularity}/5
        </p>
      </div>
    </div>
  );
}

export default ProductCard;

