import React from "react";
import "./commentList.css";
import Comment from "../comment/Comment";

const Commentlist = function () {
  return (
    <div className="container comment_list">
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default Commentlist;
