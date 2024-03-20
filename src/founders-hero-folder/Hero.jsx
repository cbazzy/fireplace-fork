import React from "react";
import "./hero.css";
import Image from "next/image";

export default function FounderHero() {
  return (
    <>
      <div className="orange-box-container">
        <div className="orange-box">
          <div className="orange-box-top">
            Meet the artisans
            <br />
            behind our
            <br />
            masterpieces!
          </div>

          <div className="orange-box-middle">Mike and Mandy</div>

          <div className="orange-box-bottom">
            <Image
              id="hero-mobile-pic"
              src="/founder-mike-and-mandy.png"
              width={250}
              height={250}
              alt="hero-mobile"
            />
          </div>
        </div>
      </div>
    </>
  );
}
