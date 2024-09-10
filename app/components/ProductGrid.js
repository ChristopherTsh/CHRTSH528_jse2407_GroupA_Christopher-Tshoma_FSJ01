"use client";

import { useState } from 'react';

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
