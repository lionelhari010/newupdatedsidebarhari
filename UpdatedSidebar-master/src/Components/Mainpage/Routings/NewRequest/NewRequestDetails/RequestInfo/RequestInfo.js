import React from "react";

import "./request-info.css";

const inputFields = [
  { id: 1, inputType: "text", placeholder: "Request Info" },
  { id: 2, inputType: "text", placeholder: "Initaied By" },
  { id: 3, inputType: "text", placeholder: "Initaied Date" },
  { id: 4, inputType: "text", placeholder: "Category" },
  { id: 5, inputType: "text", placeholder: "Brand" },
  { id: 6, inputType: "text", placeholder: "Product / FG Code" },
  { id: 7, inputType: "text", placeholder: "SKU" },
  { id: 8, inputType: "text", placeholder: "Pack Size" },
  { id: 9, inputType: "date", placeholder: "" },
  { id: 10, inputType: "text", placeholder: "Reason for Request" },
  { id: 11, inputType: "text", placeholder: "Comment Type" },
  { id: 12, inputType: "text", placeholder: "Comoponent Code /Artwork Code" },
  { id: 13, inputType: "text", placeholder: "Production Code" },
  { id: 14, inputType: "text", placeholder: "Productio Site" },
  { id: 15, inputType: "date", placeholder: "" },
];

const options = [
  { id: 1, value: "priority", name: "Priroity" },
  { id: 2, value: "high priority", name: "High Priority" },
  { id: 3, value: "low priority", name: "Low Priority" },
  { id: 4, value: "moderate", name: "Moderate" },
];

const RequestInfo = () => {
  return (
    <section>
      <div className="d-flex flex-row flex-wrap  p-3 ">
        {inputFields.map((inputField, index) => (
          <div className="input-fields-container" key={inputField.id}>
            <input
              className="input-text"
              id="input"
              type={inputField.inputType}
              required
            />
            <label htmlFor="input" placeholder={inputField.placeholder}></label>
          </div>
        ))}
        <select className="input-fields-container select-box">
          {options.map((option, index) => (
            <option value={option.value} key={index}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default RequestInfo;
