import "react";
import "./hiw.css";
import Cards from "../hiw-container/hiw-cards";

export default function Hiw() {
  return (
    <>
      <div className="how-it-works-title">How it works.</div>

      {/* <HiwContainer /> */}

      <div className="how-it-works">
        <Cards />
      </div>
    </>
  );
}
