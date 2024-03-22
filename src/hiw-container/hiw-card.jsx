import React from "react";

const Card = (props) => {
  return (
    <div className="hiw-container">
      <div className="hiw-image-container">
        <img src={props.img} alt="" />
      </div>
      <div className="hiw-textbox">
        <div className="hiw-textbox-title">{props.title}</div>

        <div className="hiw-textbox-desc">{props.text}</div>
      </div>
    </div>
  );
};

export default Card;
