import products from "./products.json";
import {NextResponse } from "next/server";


const fetchGoldPrice = async () => {
    const response = await fetch('https://www.goldapi.io/api/XAU/USD', {
      method: 'GET',
      headers: {
        'x-access-token': `${process.env.GOLD_PRICE_API}`, 
      },
    });
    if (!response.ok) {
      console.error('Failed to fetch gold price:', await response.text());
      throw new Error('Failed to fetch gold price');
    }
    const data = await response.json();
    return data.price_gram_24k; //pure gold price per gram
  };
    export async function GET(request) {
    const { searchParams } = new URL(request.url); // Extract query parameters
    

    const minPrice = parseFloat(searchParams.get("minPrice")) || 0; // Default to 0
    const maxPrice = parseFloat(searchParams.get("maxPrice")) || Infinity; // Default to no upper limit
    const minPopularity = parseFloat(searchParams.get("minPopularity")) || 0; // Default to 0
    const maxPopularity = parseFloat(searchParams.get("maxPopularity")) || 5; // Default to max score
  
    // Enrich the products with the calculated price and popularity
    const goldPrice= await fetchGoldPrice();
    const enrichedProducts = products.map((product) => ({
      ...product,
      price: parseFloat(((product.popularityScore + 1) * product.weight * goldPrice).toFixed(2)),
      popularity: parseFloat((product.popularityScore / 20).toFixed(1)), // Scale to 5
    }));
  
    // Filter products based on the provided criteria
    const filteredProducts = enrichedProducts.filter(
      (product) =>
        product.price >= minPrice &&
        product.price <= maxPrice &&
        product.popularity >= minPopularity &&
        product.popularity <= maxPopularity
    );
  
    // Return the filtered products (or all products if no filters are applied)
    return new NextResponse(JSON.stringify(filteredProducts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  