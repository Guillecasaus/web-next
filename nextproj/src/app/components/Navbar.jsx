// src/components/Navbar.js
"use client";

import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-gray-700 p-4 flex justify-between text-white">
      <Link href="/" className="text-lg font-bold">
        Home
      </Link>
      <Link href="/about" className="text-lg font-bold">
        About
      </Link>
    </nav>
  );
}

export default Navbar;
