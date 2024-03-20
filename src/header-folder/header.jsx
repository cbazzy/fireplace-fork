import React from "react";
import "./header.css";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <span>🔥 Fireplace Palace</span>
      <Image
        id="menu-open-pic"
        src="/menu-open-button.png"
        width={30}
        height={30}
        alt="menu-button"
      />
    </header>
  );
}
