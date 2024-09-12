"use client";  // This makes the entire file a client component

import { useState } from "react";

export default function ProductImageGallery({ images, fallbackImage }) {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleError = (e) => {
    e.target.src = fallbackImage;
  };

  return (
    <div>
      <img
        src={currentImage}
        alt="Product"
        onError={handleError}
        className="w-full h-96 object-cover mb-4 rounded-lg shadow-md"
      />
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
