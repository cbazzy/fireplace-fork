import React from "react";
import "./hero.css";
import Image from "next/image";

export default function FounderHero() {
  return (
    <>
      <div className="orange-box-container-hero">
        <div className="orange-box-hero">
          <div className="orange-textbox-hero">
            <div className="orange-box-top-hero">
              Meet the artisans
              <br />
              behind our
              <br />
              masterpieces!
            </div>

            <div className="orange-box-middle-hero">Mike and Mandy</div>
          </div>
          <div className="orange-box-bottom-hero">
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
