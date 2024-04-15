import Image from "next/image";
import "./page.css";
import "react";
import { Aleo } from "next/font/google";
const aleo = Aleo({ subsets: ["latin"] });

import Hero from "../src/hero-folder/Hero.jsx";
import Hiw from "../src/how-it-works-folder/hiw.jsx";
import Footer from "../src/footer-folder/footer.jsx";
import Header from "../src/header-folder/header.jsx";
import Trusted from "../src/trusted-folder/trusted.jsx";

export default function Home() {
  return (
    <>
      <main className="aleo.main">
        <Header />
        <Hero />
        <Trusted />
        <Hiw />
        <Footer />
      </main>
    </>
  );
}
