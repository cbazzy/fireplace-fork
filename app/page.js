import Image from "next/image";
import "./page.css";
import "react";

import Hero from "../src/hero-folder/Hero.jsx";
import Hiw from "../src/how-it-works-folder/hiw.jsx";
import Footer from "../src/footer-folder/footer.jsx";

export default function Home() {return (
  <>
    <header>
      <span>🔥 Fireplace Palace</span>
    </header>

    <main>
      <Hero />
      <Hiw />
    </main>

    <Footer />
  </>
);
}
