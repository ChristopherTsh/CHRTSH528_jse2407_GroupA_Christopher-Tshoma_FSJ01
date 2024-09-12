"use client";

export default function Pagination({
  currentPage,
  handleNextPage,
  handlePreviousPage,
  totalPages,
}) {
  return (
    <div className="flex justify-between items-center mt-6">
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className={`px-4 py-2 bg-blue-500 text-white rounded ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Previous
      </button>

      {/* Display the current page out of total pages */}
      <span className="text-gray-700">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={handleNextPage}
        className={`px-4 py-2 bg-blue-500 text-white rounded ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={currentPage === totalPages} // Disable if on the last page
      >
        Next
      </button>
    </div>
  );
}
