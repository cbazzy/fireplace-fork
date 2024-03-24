import Image from "next/image";
import "./general.css";
import React from "react";

import Footer from "../../src/footer-folder/footer.jsx";
import Header from "../../src/header-folder/header.jsx";
import FounderHero from "@/src/founders-hero-folder/Hero";
import FoundersCards from "@/src/founders-mid-container/founders-cards";

export default function Founders() {
  return (
    <>
      <Header />
      <main>
        <FounderHero />
        <FoundersCards />
      </main>
      <Footer />
    </>
  );
}
