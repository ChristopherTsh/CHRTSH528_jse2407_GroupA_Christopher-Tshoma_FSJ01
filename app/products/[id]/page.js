import Link from "next/link";
import ProductDetail from "./ProductImageGallery"; // Import ProductDetail component

// Server component
export default async function ProductPage({ params }) {
  let product = null;
  let error = null;

  try {
    // Fetch product data using the product ID
    const res = await fetch(`https://next-ecommerce-api.vercel.app/products/${params.id}`);

    if (!res.ok) {
      throw new Error('Failed to fetch product');
    }

    product = await res.json();
  } catch (err) {
    error = err.message;
  }

  // If there was an error, display it
  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  // If no product data was found, return a fallback UI
  if (!product) {
    return <div className="text-center text-gray-700">No product found.</div>;
  }

  return (
    <div className="container mx-auto p-6">
      {/* Back Button */}
      <Link href="/" legacyBehavior>
        <a className="flex items-center text-blue-500 hover:text-blue-700 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Products
        </a>
      </Link>

      {/* Pass product data to ProductDetail */}
      <ProductDetail product={product} /> {/* Pass product as a prop */}
    </div>
  );
}
