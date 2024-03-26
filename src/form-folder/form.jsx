"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import "./form.css";

export default function Form() {
  const [fullName, submitFullName] = useState("");
  const [postcode, submitPostcode] = useState("");
  const [address, submitAddress] = useState("");
  const [number, submitNumber] = useState("");
  const [email, submitEmail] = useState("");

  const handleChange = (e) => {
    submitFullName(e.target.value);
    submitPostcode(e.target.value);
    submitAddress(e.target.value);
    submitNumber(e.target.value);
    submitEmail(e.target.value);
  };

  const verifyField = (e) => {
    e.preventDefault();
    if (fullName || postcode || address || number || email === "") {
      alert("Please ensure all fields are complete.");
    }
  };

  return (
    <>
      <div>
        <form className="form" onSubmit={verifyField}>
          <label>Full Name</label>
          <input
            id="full-name"
            type="text"
            placeholder="... John Smith"
            onChange={handleChange}
          />

          <label>Postcode</label>
          <input
            id="postcode"
            type="text"
            placeholder="... B1 7UJ"
            onChange={handleChange}
          />

          <label>House/Flat No./Name & first line of address</label>
          <input
            id="address"
            type="text"
            placeholder="... 1 Placeholder Lane"
            onChange={handleChange}
          />

          <label>City</label>
          <input
            id="city"
            type="text"
            placeholder="... London"
            onChange={handleChange}
          />

          <label>Phone Number</label>
          <input
            id="phone-number"
            type="text"
            placeholder="... John Smith"
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            id="email"
            type="text"
            placeholder="... John Smith"
            onChange={handleChange}
          />

          <button type="submit">Request Design Consultation</button>
        </form>
      </div>
    </>
  );
}
