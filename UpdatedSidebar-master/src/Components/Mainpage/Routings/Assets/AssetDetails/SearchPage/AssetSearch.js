import React, { useRef, useState } from "react";
import "./assetSearch.css";
import Card from "../Card/Card";
import AccordionSearch from "./AccordionSearch";
import { BiSearch } from "@react-icons/all-files/bi/BiSearch";
import { DUMMY_DATA } from "../AssetMainPage/AssetMainPage";
let fdata = [];
let Newfdata = [];
const AssetSearch = () => {
  const [data, setData] = useState(false);
  const [data1, setData1] = useState(false);
  let refs = useRef();
  let refs2 = useRef();
  let refs3 = useRef();
  let refSno1 = useRef();
  let refSno2 = useRef();
  let refSno3 = useRef();
  let refSno4 = useRef();
  const filter = (dId) => {
    let NewData = DUMMY_DATA.filter((data) => {
      return data.uname == dId;
    });
    return NewData;
  };
  const filterName = (dId) => {
    let NewData = fdata.filter((data) => {
      return data.uid == dId;
    });
    return NewData;
  };
  const filteredData = () => {
    if (refs.current.checked) {
      let dId = refs.current.value;
      fdata = filter(dId);
      setData(true);
    } else if (refs2.current.checked) {
      let dId = refs2.current.value;
      fdata = filter(dId);
      setData(true);
    } else if (refs3.current.checked) {
      let dId = refs3.current.value;
      fdata = filter(dId);
      setData(true);
    } else {
      setData(false);
    }
    return fdata;
  };
  const filteredName = () => {
    if (refSno1.current.checked) {
      let dId = refSno1.current.value;
      Newfdata = filterName(dId);
      setData1(true);
      setData(false);
    } else if (refSno2.current.checked) {
      let dId = refSno2.current.value;
      Newfdata = filterName(dId);
      setData1(true);
      setData(false);
    } else if (refSno3.current.checked) {
      let dId = refSno3.current.value;
      Newfdata = filterName(dId);
      setData1(true);
      setData(false);
    } else if (refSno4.current.checked) {
      let dId = refSno4.current.value;
      Newfdata = filterName(dId);
      setData1(true);
      setData(false);
    } else {
      setData1(false);
      setData(false);
    }
  };
  return (
    <>
      <div className="main_container">
        <section className="browse_container">
          <div className="dropcard">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h4 className="heads">Filters</h4>
                <AccordionSearch
                  value1="Sutter Home"
                  value2="Joel coat wines"
                  value3="Manage tools"
                  refValue1={refs}
                  refValue2={refs2}
                  refValue3={refs3}
                  Num="One"
                  Name="Brands"
                  funcName={filteredData}
                ></AccordionSearch>
                <h2 className="accordion-header" id={`headingTwo`}>
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseTwo`}
                    aria-expanded="true"
                    aria-controls={`collapseTwo`}
                  >
                    Vareity
                  </button>
                </h2>
                <div
                  id={`collapseTwo`}
                  className="accordion-collapse collapse show"
                  aria-labelledby={`headingTwo`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button">
                          <BiSearch />
                        </button>
                      </div>
                    </div>
                    <div className="accordion_body">
                      <input
                        type="checkbox"
                        ref={refSno1}
                        onChange={filteredName}
                        name="checkBoxs"
                        id={"Two" + "1"}
                        value="V1"
                      />

                      <label htmlFor={"Two" + "1"} className="labels">
                        S.No V1
                      </label>
                    </div>
                    <div className="accordion_body">
                      <input
                        type="checkbox"
                        ref={refSno2}
                        onChange={filteredName}
                        name="checkBoxs"
                        id={"Two" + "2"}
                        value="V2"
                      />
                      <label htmlFor={"Two" + "2"} className="labels">
                        S.No V2
                      </label>
                    </div>
                    <div className="accordion_body">
                      <input
                        type="checkbox"
                        ref={refSno3}
                        onChange={filteredName}
                        name="checkBoxs"
                        id={"Two" + "3"}
                        value="V3"
                      />

                      <label htmlFor={"Two" + "3"} className="labels">
                        S.No V3
                      </label>
                    </div>
                    <div className="accordion_body">
                      <input
                        type="checkbox"
                        ref={refSno4}
                        onChange={filteredName}
                        name="checkBoxs"
                        id={"Two" + "4"}
                        value="V4"
                      />

                      <label htmlFor={"Two" + "4"} className="labels">
                        S.No V4
                      </label>
                    </div>
                  </div>
                </div>
                <AccordionSearch
                  Name1=""
                  Num="Three"
                  Name="Component Type"
                  funcName={filteredData}
                ></AccordionSearch>
                <AccordionSearch
                  Name1=""
                  Num="Four"
                  Name="Bottle Size"
                  funcName={filteredData}
                ></AccordionSearch>
              </div>
            </div>
          </div>
          <div className="displayFilterCard">
            {data &&
              fdata.map((datas, index) => {
                return (
                  <Card
                    key={index}
                    imgs={datas.pics}
                    Uid={datas.uid}
                    Pname={datas.pname}
                  ></Card>
                );
              })}
            {data1 &&
              Newfdata.map((datas, index) => {
                return (
                  <Card
                    key={index}
                    imgs={datas.pics}
                    Uid={datas.uid}
                    Pname={datas.pname}
                  ></Card>
                );
              })}
          </div>
        </section>
      </div>
    </>
  );
};
export default AssetSearch;
