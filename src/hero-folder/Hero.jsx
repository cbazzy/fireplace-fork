import React from "react";
import "./hero.css";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
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
              Perfect Fireplace ...
            </div>

            <div className="orange-box-bottom">
              
                <Link href="/booking" id="booking-button">
                  Book consultation
                </Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
