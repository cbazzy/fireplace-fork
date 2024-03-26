import Image from "next/image";
import "./page.css";
import "react";

import Footer from "../../src/footer-folder/footer.jsx";
import Header from "../../src/header-folder/header.jsx";
import FounderHero from "@/src/founders-hero-folder/Hero";
import FoundersCards from "@/src/founders-mid-container/founders-cards";
import Form from "@/src/form-folder/form";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Form />
      </main>
      <Footer />
    </>
  );
}
