"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./form.css";
import { useReducer } from "react";

const initialState = {
  fullName: "",
  postcode: "",
  address: "",
  city: "",
  number: "",
  email: "",
  errorStatus: false,
};

function formReducer(state, action) {
  switch (action.type) {
    case "NAME_UPDATED":
      return { ...state, fullName: action.payload.newFullName };
    case "POSTCODE_UPDATED":
      return { ...state, postcode: action.payload.newPostcode };
    case "ADDRESS_UPDATED":
      return { ...state, address: action.payload.newAddress };
    case "CITY_UPDATED":
      return { ...state, city: action.payload.newCity };
    case "NUMBER_UPDATED":
      return { ...state, number: action.payload.newNumber };
    case "EMAIL_UPDATED":
      return { ...state, email: action.payload.newEmail };
    case "ERROR_STATUS":
      return { ...state, errorStatus: action.payload.newErrorStatus };
    default:
      return state;
  }
}

export default function Form() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  // const [postcode, submitPostcode] = useState("");
  // const [address, submitAddress] = useState("");
  // const [city, submitCity] = useState("");
  // const [number, submitNumber] = useState("");
  // const [email, submitEmail] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");
  // const [postcodeErrorMessage, setPostcodeErrorMessage] = useState("");

  const postcodeURL = "https://api.postcodes.io/postcodes/";

  // useEffect(() => {
  //   async function fetchPostcode(postcode) {
  //     // put the inputted postcode into a variable "postcode"
  //     if (postcode ==== "") {
  //       return;
  //     }
  //     const response = await fetch(postcodeURL + postcode);
  //     const result = await response.json();
  //     const validCountry = ["England", "Scotland", "Wales"];
  //     if (!validCountry.includes(result.country)) {
  //       setPostcodeErrorMessage("Please enter a valid UK postcode.");
  //     } else {
  //       setPostcodeErrorMessage("");
  //     }
  //   }
  //   fetchPostcode(postcode);
  //   console.log(postcode);
  // });

  const handleChange = (e) => {
    const inputName = e.target.id;
    const inputValue = e.target.value;

    if (inputName === "full-name") {
      // setName (inputValue) ;
      dispatch({
        type: "FULL_NAME_UPDATED",
        payload: {
          newFullName: inputValue,
        },
      });
      return;
    }

    if (inputName === "city") {
      // setCity(inputValue);
      dispatch({
        type: "CITY_UPDATED",
        payload: {
          newCity: inputValue,
        },
      });
      return;
    }

    if (inputName === "phone-number") {
      // setNumber(inputValue);
      dispatch({
        type: "NUMBER_UPDATED",
        payload: {
          newNumber: inputValue,
        },
      });
      return;
    }

    if (inputName === "email") {
      // setEmail(inputValue);
      dispatch({
        type: "EMAIL_UPDATED",
        payload: {
          newEmail: inputValue,
        },
      });
      return;
    }

    if (inputName === "postcode") {
      // setPostcode(inputValue);
      dispatch({
        type: "POSTCODE_UPDATED",
        payload: {
          newPostcode: inputValue,
        },
      });
      return;
    }

    if (inputName === "address") {
      // setAddress(inputValue);
      dispatch({
        type: "ADDRESS_UPDATED",
        payload: {
          newAddress: inputValue,
        },
      });
      return;
    }

    // const verifyField = (e) => {
    //   e.preventDefault();
    //   if (
    //     !state.fullName ||
    //     !state.postcode ||
    //     !state.address ||
    //     !state.city ||
    //     !state.number ||
    //     !state.email
    //   ) {
    //     dispatch({
    //       type: "ERROR_STATUS",
    //       payload: "Please ensure all fields are complete.",
    //     });
    //   } else {
    //     dispatch({ type: "ERROR_STATUS", payload: "" });
    //   }
    // };

    return (
      <>
        <div className="main-div">
          <div className="design-booking">
            <div className="design-booking-text">Design Booking</div>
          </div>

          <form className="form" onSubmit={verifyField}>
            <span>Personal Information:</span>

            <div className="gray">
              <label>Full Name</label>
              <input
                id="full-name"
                type="text"
                placeholder="John Smith"
                onChange={handleChange}
              />
              <label>Postcode</label>
              <input
                id="postcode"
                type="text"
                placeholder="B1 7UJ"
                onChange={handleChange}
              />
              <p className="error-message"></p>
              <label>House/Flat Number and Street Name</label>
              <input
                id="address"
                type="text"
                placeholder="1 Placeholder Lane"
                onChange={handleChange}
              />
              <label>City</label>
              <input
                id="city"
                type="text"
                placeholder="London"
                onChange={handleChange}
              />
            </div>

            <span>Contact Information: </span>

            <div className="gray">
              <label id="phone-number">Phone Number</label>
              <input
                id="phone-number"
                type="tel"
                placeholder="07123 456789"
                onChange={handleChange}
                maxLength={11}
                pattern="0[0-9]{10}"
                title="Please enter an 11 digit number starting with 0"
              />
              <label>Email</label>
              <input
                id="email"
                type="email"
                placeholder="email@provider.com"
                onChange={handleChange}
              />
            </div>
            {state.errorStatus && (
              <p className="error-message">{state.errorStatus}</p>
            )}

            <button className="submit-button" type="submit">
              Request Design Consultation
            </button>
          </form>
        </div>
      </>
    );

    // const handleChange = (e) => {
    //   const { id, value } = e.target;

    //   if (id ==== "full-name") {
    //     submitFullName(value);
    //   } else if (id ==== "postcode") {
    //     submitPostcode(value);
    //   } else if (id ==== "address") {
    //     submitAddress(value);
    //   } else if (id ==== "phone-number") {
    //     submitCity(value);
    //   } else if (id ==== "city") {
    //     submitNumber(value);
    //   } else if (id ==== "email") {
    //     submitEmail(value);
    //   }
    // };

    // const verifyField = (e) => {
    //   e.preventDefault();
    //   if (!fullName || !postcode || !address || !city || !number || !email) {
    //     setErrorMessage("Please ensure all fields are complete."); // Display an error message if the field is empty
    //   } else {
    //     setErrorMessage(""); // Clear the error message if the field is not empty
    //     // Add similar checks for other fields if needed
    //   }
    // };
  };
}
