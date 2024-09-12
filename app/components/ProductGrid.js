"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProductGrid({ products }) {
  const fallbackImage = 'https://via.placeholder.com/150'; // Fallback image in case an image fails to load

  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4">
          <ProductImageGallery images={product.images} fallbackImage={fallbackImage} />
          <h3>{product.title}</h3>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>

          {/* SVG Buttons */}
          <div className="flex justify-around mt-4">
            {/* Add to Cart Button */}
            <button onClick={() => console.log('Added to cart:', product)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 hover:text-green-700" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 3h2l3.6 7.59-1.35 2.44C7.07 13.84 7 14.16 7 14.5 7 15.33 7.67 16 8.5 16h9c.63 0 1.18-.39 1.41-.97l3.38-8.51C22.64 6.02 22.41 5 21.69 5H6.21l-.94-2H3zm5 13c-.83 0-1.5.67-1.5 1.5S7.17 19 8 19s1.5-.67 1.5-1.5S8.83 16 8 16zm7 0c-.83 0-1.5.67-1.5 1.5S14.17 19 15 19s1.5-.67 1.5-1.5S15.83 16 15 16z" />
              </svg>
            </button>

            {/* Add to Wishlist Button */}
            <button onClick={() => console.log('Added to wishlist:', product)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 hover:text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364l-1.318 1.318-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>

            {/* View Product Button (Now navigates to product page) */}
            <Link href={`/products/${product.id}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 hover:text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.243-4.243a5.657 5.657 0 00-8-8L3 7l2.707 2.707a1 1 0 001.414 0l5.657-5.657L15 10zM21 21a5.657 5.657 0 01-8-8l5.657-5.657 8 8L21 21z" />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

// Separate component to handle the product image gallery
function ProductImageGallery({ images, fallbackImage }) {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleError = (e) => {
    e.target.src = fallbackImage; // Replace broken image with fallback
  };

  return (
    <div>
      <img
        src={currentImage}
        alt="Product"
        onError={handleError} // Handle image loading errors
        className="w-full h-64 object-cover"
      />
      {images.length > 1 && (
        <div className="flex justify-center space-x-2 mt-2">
          {images.map((img, index) => (
            <button key={index} onClick={() => setCurrentImage(img)}>
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-16 h-16 object-cover border"
                onError={handleError}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
