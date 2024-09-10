"use client"; // Ensures this component runs on the client-side

import { useState } from 'react';
import { Dialog } from '@headlessui/react';

export default function ProductModal({ product, onClose }) {
  const [currentImage, setCurrentImage] = useState(product.images[0]);

  return (
    <Dialog open={!!product} onClose={onClose} className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50 backdrop-blur-md">
        <div className="relative bg-white rounded-lg shadow-lg p-6 w-96">
          <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
            Close
          </button>
          <img src={currentImage} alt="Product" className="w-full h-64 object-cover" />
          <div className="flex justify-center mt-4">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-16 h-16 object-cover border m-1 cursor-pointer"
                onClick={() => setCurrentImage(img)}
              />
            ))}
          </div>
          <h3 className="text-xl font-semibold mt-4">{product.title}</h3>
          <p>{product.description}</p>
          <p className="mt-2">Price: ${product.price}</p>
          <p>Category: {product.category}</p>
        </div>
      </div>
    </Dialog>
  );
}
