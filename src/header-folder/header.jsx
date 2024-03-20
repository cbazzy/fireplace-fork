'use client';
import React, { useState } from 'react';
import "./header.css";
import Image from "next/image";
import Link from "next/link";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <span>🔥 Fireplace Palace</span>
      <button onClick={toggleMenu}>
        <Image
          id="menu-open-pic"
          src="/menu-open-button.png"
          width={30}
          height={30}
          alt="menu-button"
        />
      </button>
      {isOpen && (
        <nav>
          <Link href="/">Home</Link>
          <Link href="/founders">Meet the Founders</Link>
          {/* Add more links as needed */}
        </nav>
      )}
    </header>
  );
}