// components/Pagination.js
"use client";

export default function Pagination({
  currentPage,
  handleNextPage,
  handlePreviousPage,
  totalPages,
}) {
  return (
    <div className="flex justify-between mt-6">
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className={`px-4 py-2 bg-blue-500 text-white rounded ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Previous
      </button>

      <button
        onClick={handleNextPage}
        className="px-4 py-2 bg-blue-500 text-white rounded"
        disabled={currentPage === totalPages} // Disable if on last page
      >
        Next
      </button>
    </div>
  );
}
