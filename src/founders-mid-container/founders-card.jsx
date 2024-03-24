import React from "react";

const FoundersCard = (props) => {
  return (
    <div className="card-container">
      <div className="textbox">
        <div className="title">{props.title}</div>

        <div className="desc">{props.desc}</div>
      </div>

      <div className="pic-container">
        <img className="picture" src={props.img} alt="" />
      </div>
    </div>
  );
};

export default FoundersCard;
