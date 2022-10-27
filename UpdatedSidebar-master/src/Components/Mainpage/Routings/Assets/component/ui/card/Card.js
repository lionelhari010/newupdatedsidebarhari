import React from "react";
import "../../../Styles/card.css";
import { Link } from "react-router-dom";
import { BiTable } from "@react-icons/all-files/bi/BiTable";
import { FaBars } from "@react-icons/all-files/fa/FaBars";

export default function Card(props) {
  const { imgs, Uid, Pname } = props;

  return (
    <div className="contain">
      <div className="products">
        <div className="products_image">
          <img src={imgs} alt="image show here" className="cardImg" />
        </div>
        <div className="product_details">
          <div className="prod_name">
            <div className="toggleLink">{Uid}</div>
            <p>
              {Pname} <br />
              <span>Artwork</span>
            </p>
          </div>
          <FaBars className="prod_bar" />
        </div>
      </div>
      <div className="hide_content">
        <Link to="/Assets/Search" className="pagelink">
          <BiTable />
          <span>Search</span>
        </Link>
        <Link to="/Assets/Browse" className="pagelink">
          <BiTable />
          <span>Browse</span>
        </Link>
      </div>
    </div>
  );
}
