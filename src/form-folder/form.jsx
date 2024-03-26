import React from "react";
import Image from "next/image";

export default function Form() {
  return (
    <>
      <div>
        <form className="form">
          <input id="full-name" type="text" placeholder="... John Smith" />
          <input id="postcode" type="text" placeholder="... B1 7UJ" />
          <input id="address" type="text" placeholder="... 1 Placeholder Lane" />
          <input id="city" type="text" placeholder="... London" />
          <input id="phone-number" type="number" placeholder="... John Smith" />
          <input id="email" type="email" placeholder="... John Smith" />

          <button type="submit">Add New Card</button>
        </form>
      </div>
    </>
  );
}
