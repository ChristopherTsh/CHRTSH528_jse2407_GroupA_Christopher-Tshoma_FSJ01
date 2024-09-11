"use client";
import { useState, useEffect } from "react";
import ProductGrid from './components/ProductGrid';
import Navbar from './components/Navbar';

export default function HomePage() {
  const productsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Function to fetch products from the API
  const fetchProducts = async (page) => {
    setIsLoading(true);
    const res = await fetch(`https://next-ecommerce-api.vercel.app/products?limit=${productsPerPage}&skip=${(page - 1) * productsPerPage}`);
    const data = await res.json();
    setProducts(data);
    setIsLoading(false);
  };

  // Fetch products when the component mounts and when currentPage changes
  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  // Handlers for pagination
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <Navbar />

      {isLoading ? (
        <p>Loading products...</p>
      ) : (
        <ProductGrid products={products} />
      )}

      {/* Pagination Controls */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-blue-500 text-white rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Previous
        </button>

        <button
          onClick={handleNextPage}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
