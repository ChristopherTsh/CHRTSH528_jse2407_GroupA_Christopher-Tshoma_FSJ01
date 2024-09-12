"use client";

export default function Pagination({
  currentPage,
  handleNextPage,
  handlePreviousPage,
  totalPages,
}) {
  return (
    <div className="flex justify-between items-center mt-6 p-6">
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1} // Disable if on the first page
        className={`min-w-[200px] px-4 py-3 bg-yellow-300 hover:bg-yellow-400 text-black text-sm font-semibold rounded ${
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
        className={`min-w-[200px] px-4 py-3 bg-yellow-300 hover:bg-yellow-400 text-black text-sm font-semibold rounded ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={currentPage === totalPages} // Disable if on the last page
      >
        Next
      </button>
    </div>
  );
}
