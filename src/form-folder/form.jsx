import React from "react";
import Image from "next/image";

export default function Form() {
  return (
    <>
      <div>
        <form className="form">
          <label>
            Full Name
            <input id="full-name" type="text" placeholder="... John Smith" />
          </label>
          <label>
            Postcode
            <input id="postcode" type="text" placeholder="... B1 7UJ" />
          </label>
          <label>
            House/Flat No./Name & first line of address
            <input
              id="address"
              type="text"
              placeholder="... 1 Placeholder Lane"
            />
          </label>

          <label>
            <input id="city" type="text" placeholder="... London" />
          </label>
          <label>
            <input
              id="phone-number"
              type="number"
              placeholder="... John Smith"
            />
          </label>

          <label>
            <input id="email" type="email" placeholder="... John Smith" />
          </label>

          <button type="submit">Request Design Consultation</button>
        </form>
      </div>
    </>
  );
}
