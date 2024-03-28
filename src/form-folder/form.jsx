"use client";

import React, { useEffect } from "react";
import "./form.css";
import { useReducer } from "react";

const initialState = {
  fullName: "",
  postcode: "",
  address: "",
  city: "",
  number: "",
  email: "",
};

function formReducer(state, action) {
  switch (action.type) {
    case "FULL_NAME_UPDATED":
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
    case "POSTCODE_ERROR":
      return { ...state, postcodeError: action.payload.newPostcodeError };
    default:
      return state;
  }
}

export default function Form() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const postcodeURL = "https://api.postcodes.io/postcodes/";

  // useEffect(() => {
  //   async function fetchPostcode(postcode) {
  //     if (postcode === "") {
  //       return;
  //     }
  //     const response = await fetch(postcodeURL + postcode);
  //     const result = await response.json();
  //     const validCountry = ["England", "Scotland", "Wales"];
  //     // if (!validCountry.includes(result.country)) {
  //     //   dispatch({
  //     //     type: "ERROR_STATUS",
  //     //     payload: {
  //     //       newErrorStatus: "Please enter a valid UK postcode.",
  //     //     },
  //     //   });
  //     // } else {
  //     //   dispatch({
  //     //     type: "ERROR_STATUS",
  //     //     payload: {
  //     //       newErrorStatus: "",
  //     //     },
  //     //   });
  //     // }
  //   }
  //   fetchPostcode(state.postcode);
  // }, [state.postcode]);

  const handleChange = (e) => {
    const inputName = e.target.id;
    const inputValue = e.target.value;

    if (inputName === "full-name") {
      dispatch({
        type: "FULL_NAME_UPDATED",
        payload: {
          newFullName: inputValue,
        },
      });
      return;
    }

    if (inputName === "city") {
      dispatch({
        type: "CITY_UPDATED",
        payload: {
          newCity: inputValue,
        },
      });
      return;
    }

    if (inputName === "phone-number") {
      dispatch({
        type: "NUMBER_UPDATED",
        payload: {
          newNumber: inputValue,
        },
      });
      return;
    }

    if (inputName === "email") {
      dispatch({
        type: "EMAIL_UPDATED",
        payload: {
          newEmail: inputValue,
        },
      });
      return;
    }

    if (inputName === "postcode") {
      dispatch({
        type: "POSTCODE_UPDATED",
        payload: {
          newPostcode: inputValue,
        },
      });
      return;
    }

    if (inputName === "address") {
      dispatch({
        type: "ADDRESS_UPDATED",
        payload: {
          newAddress: inputValue,
        },
      });
      return;
    }
  };

  const verifyField = (e) => {
    e.preventDefault();
    if (
      !state.fullName ||
      !state.postcode ||
      !state.address ||
      !state.city ||
      !state.number ||
      !state.email
    ) {
      dispatch({
        type: "ERROR_STATUS",
        payload: {
          newErrorStatus: "Please ensure all fields are complete.",
        },
      });
    } else {
      dispatch({
        type: "ERROR_STATUS",
        payload: {
          newErrorStatus: "",
        },
      });
    }
  };

  const verifyPostcode = async (e) => {
    e.preventDefault();
    const response = await fetch(postcodeURL + state.postcode);
    const payload = await response.json();
    if (payload.status === 200) {
      dispatch({
        type: "POSTCODE_ERROR",
        payload: {
          newPostcodeError: "",
        },
      });
    } else if (payload.status === 404) {
      dispatch({
        type: "POSTCODE_ERROR",
        payload: {
          newPostcodeError:
            "Please enter a English, Scottish or Welsh postcode",
        },
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    verifyField(e);
    await verifyPostcode(e);
  };

  // dispatch({
  //   type: "ERROR_STATUS",
  //   payload: {
  //     newErrorStatus: "Please ensure all fields are complete.",
  //   },
  // });
  //   } else {
  //     dispatch({
  //       type: "ERROR_STATUS",
  //       payload: {
  //         newErrorStatus: "",
  //       },
  //     });
  //   }
  // };

  return (
    <>
      <div className="main-div">
        <div className="design-booking">
          <div className="design-booking-text">Design Booking</div>
        </div>

        <form className="form" onSubmit={handleSubmit}>
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
              value={state.postcode}
              id="postcode"
              type="text"
              placeholder="B1 7UJ"
              onChange={handleChange}
            />

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
          {state.postcodeError && (
            <p className="error-message">{state.postcodeError}</p>
          )}

          <button className="submit-button" type="submit">
            Request Design Consultation
          </button>
        </form>
      </div>
    </>
  );
}
