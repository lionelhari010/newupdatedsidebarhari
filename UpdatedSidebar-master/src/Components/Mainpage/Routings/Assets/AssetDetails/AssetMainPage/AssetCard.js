import { FaBars } from "react-icons/fa";

const AssetCard = (props) => {
  const { eachUser } = props;

  const { pics, pname, uid, uname } = eachUser;
  //  console.log(pics, pname, uid, uname);

  //

  return (
    <div className="d-flex flex-column">
      <div className="m-1 border border-light card-container">
        <img height={150} width={150} src={pics} alt={pname} />
        <div className="d-flex px-2 align-content-center justify-content-between footer-version">
          <p className="product-version">{uid}</p>
          <div className="d-flex flex-column ">
            <span>{pname}</span>
            <span>{uname}</span>
          </div>
          <FaBars className="fa-bars" />
        </div>
      </div>
    </div>
  );
};

export default AssetCard;
