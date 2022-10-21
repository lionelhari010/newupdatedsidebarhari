import React from "react";
import { AiFillFolderOpen } from "@react-icons/all-files/ai/AiFillFolderOpen";
import "./accordBrowse.css";
const AccordionBrowse = (props) => {
  return (
    <div>
      <div className="accordion-item">
        <h2 className="accordion-header" id={`heading${props.Num}`}>
          <button
            className="accordion-button collapsed acccordBtn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${props.Num}`}
            aria-expanded="false"
            aria-controls={`collapse${props.Num}`}
            title={`${props.Name} based on diff person`}
          >
            <AiFillFolderOpen />
            <span className="accordTitle">
              {props.Name} - {props.value}
            </span>
          </button>
        </h2>

        <div
          id={`collapse${props.Num}`}
          className={`accordion-collapse collapse ${
            props.Num == "One" ? "show" : ""
          } `}
          aria-labelledby={`heading${props.Num}`}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <input
              type="checkbox"
              ref={props.refValue}
              onChange={props.funcName}
              name=""
              id={props.Num}
              value={props.value}
              className="checkboxs"
            />
            <label htmlFor={props.Num} className="labels">
              {props.value} Items
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccordionBrowse;
