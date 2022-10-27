import React from "react";
import { BiLike } from "react-icons/bi";

import "./comment-card.css";

const CommentCard = (props) => {
  const { eachComment } = props;
  const { name, img_link, comment } = eachComment;
  return (
    <div className="p-3">
      <div className="d-flex">
        <img
          className="mr-2 rounded-circle"
          width={50}
          height={50}
          src={img_link}
          alt={name}
        />
        <div className="d-flex flex-column">
          <h1 className="h6 font-weight-bold">{name}</h1>
          <p>{comment}</p>
          <div className="mt-3">
            <BiLike className="comment-like" />
            <span>Reply</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;

// const { eachData } = props;
// const { name, img_link, command } = eachData;
// return (
//   <div className="comment-card-container">
//     <div className="comment-card-profile-details">
//       <img className="comment-card-profile-img" src={img_link} alt={name} />
//       <div>
//         <h6>{name}</h6>
//         <p className="command-text">{command}</p>
//         <div className="comment-reactions-container">
//           <BiLike className="comment-like" />
//           <span>Reply</span>
//         </div>
//       </div>
//     </div>
//   </div>
// );
// };
