"use client"; // This makes the entire file a client component

import { useState } from "react";

export default function ProductImageGallery({ images, fallbackImage }) {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleError = (e) => {
    e.target.src = fallbackImage;
  };

  return (
    <div>
      {/* Main Image Container */}
      <div className="flex justify-center mb-4">
        <img
          src={currentImage}
          alt="Product"
          onError={handleError}
          className="w-64 h-64 object-cover rounded-lg shadow-md"
        />
      </div>
  
      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex justify-center space-x-2 mt-2">
          {images.map((img, index) => (
            <button key={index} onClick={() => setCurrentImage(img)}>
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-16 h-16 object-cover border-2 rounded-md hover:border-blue-500"
                onError={handleError}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}