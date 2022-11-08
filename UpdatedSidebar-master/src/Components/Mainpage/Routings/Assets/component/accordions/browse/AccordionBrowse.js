import React from "react";
import { AiFillFolderOpen } from "@react-icons/all-files/ai/AiFillFolderOpen";
import "./accordBrowse.css";
const AccordionBrowse = (props) => {
  return (
    // <MDBAccordion initialActive={1}>
    //   <MDBAccordionItem
    //     collapseId={1}
    //     title={`${props.Name} based on diff person`}
    //     className="acccordBtn"
    //     headerTitle={props.Name + props.value}
    //   >
    //     <strong>This is the first item's accordion body.</strong> It is shown by
    //     default, until the collapse plugin adds the appropriate classes that we
    //     use to style each element. These classes control the overall appearance,
    //     as well as the showing and hiding via CSS transitions. You can modify
    //     any of this with custom CSS or overriding our default variables. It's
    //     also worth noting that just about any HTML can go within the{" "}
    //     <code>.accordion-body</code>, though the transition does limit overflow.
    //   </MDBAccordionItem>
    //   <MDBAccordionItem collapseId={2} headerTitle="Accordion Item #2">
    //     <strong>This is the second item's accordion body.</strong> It is hidden
    //     by default, until the collapse plugin adds the appropriate classes that
    //     we use to style each element. These classes control the overall
    //     appearance, as well as the showing and hiding via CSS transitions. You
    //     can modify any of this with custom CSS or overriding our default
    //     variables. It's also worth noting that just about any HTML can go within
    //     the <code>.accordion-body</code>, though the transition does limit
    //     overflow.
    //   </MDBAccordionItem>
    //   <MDBAccordionItem collapseId={3} headerTitle="Accordion Item #3">
    //     <strong>This is the third item's accordion body.</strong> It is hidden
    //     by default, until the collapse plugin adds the appropriate classes that
    //     we use to style each element. These classes control the overall
    //     appearance, as well as the showing and hiding via CSS transitions. You
    //     can modify any of this with custom CSS or overriding our default
    //     variables. It's also worth noting that just about any HTML can go within
    //     the <code>.accordion-body</code>, though the transition does limit
    //     overflow.
    //   </MDBAccordionItem>
    // </MDBAccordion>
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
