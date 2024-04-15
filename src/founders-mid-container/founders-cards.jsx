import React from "react";
import FoundersCard from "./founders-card";
import "./founders-mid.css";

const cards = [
  {
    title: "Our craftmanship",
    desc: "Mike and Mandy studied and honed their craft under the fireplace sensei Vik Von Blaze. Nothing gets delivered to a customer without their sign off.",
    img: "/founders-1.png",
  },
  {
    title: "Our experience",
    desc: "Numbers don't lie - we've been around for 20+ years and have a long list of happy customers who gladly recommend us.",
    img: "/founders-2.png",
  },
  {
    title: "Our guarantee",
    desc: "If you're not 100% satisfied we will fully refund your purchase. Also, we offer free repairs for the first 20 years of ownership. Find that somewhere else!",
    img: "/founders-3.png",
  },
];

const FoundersCards = () => {
  return (
    <div className="mid-section">
      {cards.map((card) => {
        return (
          <FoundersCard
            key={index}
            desc={card.desc}
            img={card.img}
            title={card.title}
          />
        );
      })}
    </div>
  );
};

export default FoundersCards;
