import React from "react";
import Image from "next/image";
import "./form.css";

export default function Form() {
  return (
    <>
      <div>
        <form className="form">
          <label>Full Name</label>
          <input id="full-name" type="text" placeholder="... John Smith" />

          <label>Postcode</label>
          <input id="postcode" type="text" placeholder="... B1 7UJ" />

          <label>House/Flat No./Name & first line of address</label>
          <input
            id="address"
            type="text"
            placeholder="... 1 Placeholder Lane"
          />

          <label>City</label>
          <input id="city" type="text" placeholder="... London" />

          <label>Phone Number</label>
          <input id="phone-number" type="number" placeholder="... John Smith" />

          <label>Email</label>
          <input id="email" type="email" placeholder="... John Smith" />

          <button type="submit">Request Design Consultation</button>
        </form>
      </div>
    </>
  );
}
