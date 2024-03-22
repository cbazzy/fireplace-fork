import React from "react";
import Card from "./hiw-card";

const cards = [
  {
    img: "/how-it-works-1.png",
    title: "Give us a call ...",
    text: "Call us and book in a 'Design Consultation' on a date and time to suit you.",
  },
  {
    img: "/how-it-works-2.png",
    title: "We come to you ...",
    text: "We come to your home and do an assessment of the space and to your style preference.",
  },
  {
    img: "/how-it-works-3.png",
    title: "We recommend ...",
    text: "We send you a bespoke set of fireplace recommendations.",
  },
];

const Cards = () => {
  return (
    <div className="hiw-main">
      {cards.map((card) => {
        // eslint-disable-next-line react/jsx-key
        return <Card img={card.img} title={card.title} text={card.text} />;
      })}
    </div>
  );
};

export default Cards;
