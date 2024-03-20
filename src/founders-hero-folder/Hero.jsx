import React from "react";
import "./hero.css";
import Image from "next/image";

export default function FounderHero() {
  return (
    <>
      <div className="hero">
        <div className="hero-mobile-pic-container">
          <Image
            id="hero-mobile-pic"
            src="/hero-mobile.png"
            width={500}
            height={500}
            alt="hero-mobile"
          />
        </div>

        <div className="orange-box-container">
          <div className="orange-box">
            <div className="orange-box-top">
              Discover the
              <br />
              Perfect Fireplace...
            </div>

            <div className="orange-box-bottom">
              <div className="orange-box-bottom-left">Book consultation:</div>

              <div className="orange-box-bottom-right">0121 345 6789</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
