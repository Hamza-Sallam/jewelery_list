import products from "./products.json";
import {NextResponse } from "next/server";


// const fetchGoldPrice = async () => {
//     const response = await fetch('https://www.goldapi.io/api/XAU/USD', {
//       method: 'GET',
//       headers: {
//         'x-access-token': 'goldapi-u4sm4iscnto-io', 
//       },
//     });
//     if (!response.ok) {
//       console.error('Failed to fetch gold price:', await response.text());
//       throw new Error('Failed to fetch gold price');
//     }
//     const data = await response.json();
//     return data.price_gram_24k; //pure gold price per gram
//   };
  
  export async function GET() {
    try {
      // const goldPrice = await fetchGoldPrice();
      const enrichedProducts = products.map((product) => ({
        ...product,
        price: ((product.popularityScore + 1) * product.weight * 6).toFixed(2),
        popularity: (product.popularityScore / 20).toFixed(1), // Scale to 5
      }));
  
      return new NextResponse(JSON.stringify(enrichedProducts), {
        status:200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      return new NextResponse(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }