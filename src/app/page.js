import axios from "axios";
import ProductCarousel from "../components/Carousel"; // Import the carousel component

export default async function Home() {
  const response = await axios.get("http://localhost:3000/api/products");
  const products = response.data;

  return (
    <div className="min-h-screen flex flex-col justify-center p-6"> {/* Flex container with column direction */}
    <div className="max-w-6xl mx-auto text-center"> {/* Container for the header */}
      <h1 className="text-[45px] font-avenir text-gray-800 mb-6">
        Product List
      </h1>
    </div>
    
    <div className="relative  px-4 "> {/* Full-width slider */}
      <ProductCarousel products={products} />
    </div>
  </div>
  
  
  );
}
