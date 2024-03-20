import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  return (
    <main>
      <Image
        id="menu-close-pic"
        src="/menu-close-button.png"
        width={30}
        height={30}
        alt="menu-button"
      />
      <nav>
        <Link href="/">Home</Link>
        <Link href="/founders">Meet the Founders</Link>
      </nav>
    </main>
  );
}
