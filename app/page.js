import Image from "next/image";
import "./page.css";
import "react";

import Hero from "../src/hero-folder/Hero.jsx";
import Hiw from "../src/how-it-works-folder/hiw.jsx";
import Footer from "../src/footer-folder/footer.jsx";
import Header from "../src/header-folder/header.jsx";

export default function Home() {return (
  <>
  <Header />
    <main>
      <Hero />
      <Hiw />
    </main>
  <Footer />
  </>
);
}
