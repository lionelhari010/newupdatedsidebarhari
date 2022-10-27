import React from "react";

import CommentCard from "../Comments/CommentCard/CommentCard";

const comment_data = [
  {
    id: 1,
    name: "Jimmy Will",
    img_link:
      "https://res.cloudinary.com/du4tzzgd7/image/upload/v1665658585/12121212_n1ltdg.jpg",
    comment:
      "Another word for good command? Noun The ability to express oneself easily and articulatelyfluency articulateness articulacy ease eloquence glibness volubilityanother worability to express oneself easily and articulatelyfluency articulateness articulacy ease eloquence glibness volubilitassurance🥰",
  },

  {
    id: 2,
    name: "Alisa Grill",
    img_link:
      "https://res.cloudinary.com/du4tzzgd7/image/upload/v1665662784/OIP_wxyojd.jpg",
    comment:
      "Tons of awesome cute boy profile wallpapers to download for free. You can also upload and share your favorite cute boy profile wallpapers. HD wallpapers and background images🙌",
  },
];

const Comments = () => {
  return (
    <div className="p3">
      {comment_data.map((comment) => (
        <CommentCard key={comment.id} eachComment={comment} />
      ))}
    </div>
  );
};

export default Comments;
