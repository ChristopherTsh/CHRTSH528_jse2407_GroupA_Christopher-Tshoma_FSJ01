"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex shadow-sm bg-white font-sans min-h-[70px]">
      <div className="flex flex-wrap items-center justify-between sm:px-10 px-6 py-3 relative lg:gap-y-4 gap-y-6 gap-x-4 w-full">
        {/* Left Section: Toggle Button & Logo */}
        <div className="flex">
          <button id="toggleOpen" onClick={toggleMenu}>
            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        {/* Search Bar */}
        <div className="bg-gray-100 flex border-2 rounded max-md:order-1 border-transparent focus-within:border-blue-500 focus-within:bg-transparent px-4 h-11 lg:w-2/4 max-md:w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-gray-400 mr-4 rotate-90">
            <path
              d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"
            ></path>
          </svg>
          <input
            type="text"
            placeholder="Search products..."
            className="w-full outline-none bg-transparent text-[#333] text-sm"
          />
          <button className="min-w-[150px] px-4 py-3 bg-yellow-300 hover:bg-yellow-400 text-black text-sm font-semibold rounded">
            Search
          </button>
        </div>

        {/* Cart, Wishlist, and User Menu */}
        <div className="flex items-center space-x-8 max-md:ml-auto">
          <Link href="/cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="cursor-pointer fill-[#333] hover:fill-[#077bff]" viewBox="0 0 511 511.999">
              <path
                d="M498.7 222.695c-.016-.011-.028-.027-.04-.039L289.805 13.81C280.902 4.902 269.066 0 256.477 0c-12.59 0-24.426 4.902-33.332 13.809L14.398 222.55c-.07.07-.144.144-.21.215-18.282 18.386-18.25 48.218.09 66.558 8.378 8.383 19.44 13.235 31.273 13.746.484.047.969.07 1.457.07h8.32v153.696c0 30.418 24.75 55.164 55.168 55.164h81.711c8.285 0 15-6.719 15-15V376.5c0-13.879 11.293-25.168 25.172-25.168h48.195c13.88 0 25.168 11.29 25.168 25.168V497c0 8.281 6.715 15 15 15h81.711c30.422 0 55.168-24.746 55.168-55.164V303.14h7.719c12.586 0 24.422-4.903 33.332-13.813 18.36-18.367 18.367-48.254.027-66.633zm-21.243 45.422a17.03 17.03 0 0 1-12.117 5.024h-22.72c-8.285 0-15 6.714-15 15v168.695c0 13.875-11.289 25.164-25.168 25.164h-66.71V376.5c0-30.418-24.747-55.168-55.169-55.168H232.38c-30.422 0-55.172 24.75-55.172 55.168V482h-66.71c-13.876 0-25.169-11.29-25.169-25.164V288.14c0-8.286-6.715-15-15-15H48a13.9 13.9 0 0 0-.703-.032c-4.469-.078-8.66-1.851-11.8-4.996-6.68-6.68-6.68-17.55 0-24.234.003 0 .003-.004.007-.008l.012-.012L244.363 35.02A17.003 17.003 0 0 1 256.477 30c4.574 0 8.875 1.781 12.113 5.02l208.8 208.796.098.094c6.645 6.692 6.633 17.54-.031 24.207zm0 0"
              ></path>
            </svg>
          </Link>
          <Link href="/wishlist">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="cursor-pointer fill-[#333] hover:fill-[#077bff]" viewBox="0 0 371.263 371.263">
              <path
                d="M305.402 234.794v-70.54c0-52.396-33.533-98.085-79.702-115.151.539-2.695.838-5.449.838-8.204C226.539 18.324 208.215 0 185.64 0s-40.899 18.324-40.899 40.899c0 2.695.299 5.389.778 7.964-15.868 5.629-30.539 14.551-43.054 26.647-23.593 22.755-36.587 53.354-36.587 86.169v73.115c0 2.575-2.096 4.731-4.731 4.731-22.096 0-40.959 16.647-42.995 37.845-1.138 11.797 2.755 23.533 10.719 32.276 7.904 8.683 19.222 13.606 31.034 13.606h49.505c14.173 0 26.576-9.035 30.936-22.53 4.151 3.298 9.369 5.301 15.014 5.301h99.084c9.744 0 17.68-7.94 17.68-17.68v-28.204c0-9.74-7.936-17.68-17.68-17.68-2.596 0-4.731-2.136-4.731-4.731zm0 0"
              ></path>
            </svg>
          </Link>
          <Link href="/profile">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="cursor-pointer fill-[#333] hover:fill-[#077bff]" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 0a6 6 0 1 1 0 12A6 6 0 0 1 12 0zm7 14H5c-2.2 0-4 1.8-4 4v4h22v-4c0-2.2-1.8-4-4-4z"
              ></path>
            </svg>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full bg-white ${menuOpen ? "block" : "hidden"} lg:hidden`}>
        <nav className="px-10 py-4 space-y-4">
          <Link href="/cart" className="block">Cart</Link>
          <Link href="/wishlist" className="block">Wishlist</Link>
          <Link href="/profile" className="block">Profile</Link>
        </nav>
      </div>
    </header>
  );
}
