"use client";

import Navbar from './components/Navbar';

// This function runs on the server to fetch data before rendering the page
export default function HomePage() {
  return (
    <div>
      {/* Navbar Component */}
      <Navbar />
    </div>
  );
}
