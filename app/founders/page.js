import Image from "next/image";
import "./page.css";
import React from "react";

import Hero from "../../src/hero-folder/Hero.jsx";
import Hiw from "../../src/how-it-works-folder/hiw.jsx";
import Footer from "../../src/footer-folder/footer.jsx";
import Header from "../../src/header-folder/header.jsx";
import FounderHero from "@/src/founders-hero-folder/Hero";

export default function Founders() {
  return (
    <>
      <Header />
      <main>
        <FounderHero />
      </main>
      <Footer />
    </>
  );
}
