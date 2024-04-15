import React from "react";
import Image from "next/image";

const FoundersCard = (props) => {
  return (
    <div className="card-container">
      <div className="textbox">
        <div className="title">{props.title}</div>

        <div className="desc">{props.desc}</div>
      </div>

      <div className="pic-container">
        <Image className="picture" src={props.img} alt="" />
      </div>
    </div>
  );
};

export default FoundersCard;
