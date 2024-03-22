"use client";
import React, { useState, useEffect } from "react";
import "./header.css";
import Image from "next/image";
import Link from "next/link";

//Initialise a state variable called menuToggle, set to false
export default function Header() {
  const [menuToggle, setMenuToggle] = useState(false);

  // UseEffect is a React hook that runs when menuToggle state changes
  useEffect(() => {
    const body = document.body;
    const title = document.querySelector("body > header > span");

    if (menuToggle) {
      body.classList.add("no-scroll");
    } else body.classList.remove("no-scroll");
  }, [menuToggle]);

  // This function is called when menu button is clicked
  function handleClick() {
    // Toggle the menuToggle state from true to false or vice versa
    setMenuToggle(!menuToggle);
  }

  // var for path to the correct image based on the menuToggle state
  const menuButtonImage = menuToggle
    ? "/menu-close-button.png"
    : "/menu-open-button.png";

  return (
    <header className={menuToggle ? "orange-background" : ""}>
      {!menuToggle && <span>🔥 Fireplace Palace</span>}
      <button className="menu-button" onClick={handleClick}>
        <Image
          className="menu-btn"
          src={menuButtonImage}
          width={30}
          height={30}
          alt="menu-button"
        />
      </button>
      {menuToggle ? (
        <div className="mobile-menu">
          <nav>
            <div className="links">
              <Link href="/">Home</Link>
            </div>
            <div className="links">
              <Link href="/founders">Meet the Founders</Link>
            </div>
            {/* Add more links as needed */}{" "}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
