"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Import Slick's default styles
import ProductCard from "./ProductCard"; // Import ProductCard
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";  // Correct named import

// Custom Arrow Components with Chevron icons
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`arrow ${className}`}
      style={{
        ...style,
        left: "-20px", 
        zIndex: 10,   
      }}
    >
      <FaChevronLeft style={{ color: "black", fontSize: "40px" }} />
    </div>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`arrow ${className}`}
      style={{
        ...style,
        right: "10px", 
        zIndex: 10,    
      }}
    >
      <FaChevronRight style={{ color: "black", fontSize: "40px"}} />
    </div>
  );
}

function ProductCarousel({ products }) {
  const settings = {
    infinite: false,
    slidesToShow: 4,   
    slidesToScroll: 1,  
    autoplay: false,    
    speed: 500,         
    arrows: true,
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 3,  
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,  
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,  
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {products.map((product) => (
        <div key={product.name}>
          <ProductCard product={product} />
        </div>
      ))}
    </Slider>
  );
}

export default ProductCarousel;
