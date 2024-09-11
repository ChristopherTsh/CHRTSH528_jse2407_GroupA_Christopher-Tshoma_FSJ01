"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Home Link */}
        <Link href="/" className="text-xl font-bold">
          Home
        </Link>

        {/* Search Bar */}
        <form className="flex">
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="px-2 py-1 rounded-l border-none focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 px-4 py-1 rounded-r hover:bg-blue-600"
          >
            Search
          </button>
        </form>

        {/* Cart and Wishlist */}
        <div className="space-x-4">
          <Link href="/cart" className="text-lg">
            Cart
          </Link>
          <Link href="/wishlist" className="text-lg">
            Wishlist
          </Link>
        </div>
      </div>
    </nav>
  );
}
