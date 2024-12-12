"use client"; 
import { useEffect, useState } from "react"; // Import useState and useEffect
import axios from "axios"; 
import ProductCarousel from "../components/Carousel"; // Import the carousel component

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

  // Fetch products after the component mounts (client-side)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products"); 
        setProducts(response.data);
      } catch (err) {
        setError("Failed to fetch products from the API");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures it runs only once after component mounts

  if (loading) {
    return <div>Loading Products...</div>; // Show loading state while fetching
  }

  if (error) {
    return <div>{error}</div>; // Display error if any
  }

  return (
    <div className="min-h-screen flex flex-col justify-center p-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-[45px] font-avenir text-gray-800 mb-6">
          Product List
        </h1>
      </div>

      <div className="relative px-4">
        <ProductCarousel products={products} />
      </div>
    </div>
  );
}
