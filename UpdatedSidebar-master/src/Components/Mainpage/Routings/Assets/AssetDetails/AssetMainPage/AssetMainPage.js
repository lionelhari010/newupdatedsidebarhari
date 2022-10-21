import React from "react";
import AssetCard from "./AssetCard";

import "./AssetMainPage.css";

export const DUMMY_DATA = [
  {
    uname: "Sutter Home",
    pname: "Milk",
    uid: "V1",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568380/prod1_wrycvd.webp",
  },
  {
    uname: "Manage tools",
    pname: "Biscuit",
    uid: "V2",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568432/prod2_z1sbza.jpg",
  },
  {
    uname: "Sutter Home",
    pname: "Bread",
    uid: "V3",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568453/prod3_ypf7bv.jpg",
  },
  {
    uname: "Joel coat wines",
    pname: "water",
    uid: "V4",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568453/prod4_rrr0jj.jpg",
  },
  {
    uname: "Joel coat wines",
    pname: "Biscuit",
    uid: "V4",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568432/prod2_z1sbza.jpg",
  },
  {
    uname: " Manage tools",
    pname: "Biscuit",
    uid: "V2",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568380/prod1_wrycvd.webp",
  },
  {
    uname: "Sutter Home",
    pname: "Bread",
    uid: "V4",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568453/prod3_ypf7bv.jpg",
  },
  {
    uname: "Joel coat wines",
    pname: "Sofa",
    uid: "V6",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665574021/furniImg_ncmisz.jpg",
  },
  {
    uname: "Manage tools",
    pname: "Bread",
    uid: "V3",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568453/prod3_ypf7bv.jpg",
  },
  {
    uname: "Joel coat wines",
    pname: "Bread",
    uid: "V5",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568453/prod3_ypf7bv.jpg",
  },
  {
    uname: " Manage tools",
    pname: "Biscuit",
    uid: "V5",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568432/prod2_z1sbza.jpg",
  },
  {
    uname: "Sutter Home",
    pname: "water",
    uid: "V2",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568453/prod4_rrr0jj.jpg",
  },
  {
    uname: " Manage tools",
    pname: "water",
    uid: "V3",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568453/prod4_rrr0jj.jpg",
  },
  {
    uname: " Manage tools",
    pname: "Biscuit",
    uid: "V2",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568380/prod1_wrycvd.webp",
  },
  {
    uname: "Joel coat wines",
    pname: "Bread",
    uid: "V5",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568453/prod3_ypf7bv.jpg",
  },
  {
    uname: "Joel coat wines",
    pname: "Sofa",
    uid: "V6",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665574021/furniImg_ncmisz.jpg",
  },
  {
    uname: "Sutter Home",
    pname: "Milk",
    uid: "V1",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568380/prod1_wrycvd.webp",
  },
  {
    uname: "Joel coat wines",
    pname: "Bread",
    uid: "V5",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568453/prod3_ypf7bv.jpg",
  },
  {
    uname: "Joel coat wines",
    pname: "Biscuit",
    uid: "V4",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568432/prod2_z1sbza.jpg",
  },
];

const AssetMainPage = () => {
  return (
    <div className="d-flex flex-wrap p-1 ">
      {DUMMY_DATA.map((eachUser, index) => (
        <AssetCard eachUser={eachUser} key={index} />
      ))}
    </div>
  );
};

export default AssetMainPage;
