import Link from "next/link";
import ProductImageGallery from "./ProductImageGallery";

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
      <Link href="/products" legacyBehavior>
        <a className="flex items-center text-blue-500 hover:text-blue-700 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Products
        </a>
      </Link>

      {/* Product Information */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>

        {/* Product Image Gallery */}
        <ProductImageGallery images={product.images} fallbackImage={product.thumbnail} />

        <p className="text-xl font-semibold mt-6">Price: ${product.price}</p>
        <p className="text-gray-600">Category: {product.category}</p>
      </div>
    </div>
  );
}
