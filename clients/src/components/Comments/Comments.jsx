import React, { useState } from "react";
import "./Comments.css";
import DisplayComments from "./DisplayComments";
function Comments() {
  const [commentText, setCommentText] = useState("");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(commentText);
    setCommentText("");
  };
  const commentsList = [
    {
      _id: "1",
      commentBody: "hello",
      userCommented: "abc",
    },
    {
      _id: "2",
      commentBody: "hiii",
      userCommented: "xyz",
    },
  ];
  return (
    <>
      <form className="comments_sub_form_comments" onSubmit={handleOnSubmit}>
        <input
          type="text"
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="add comment..."
          value={commentText}
          className="comment_ibox"
        />
        {"   "}
        <input type="submit" value="add" className="comment_add_btn_comments" />
      </form>
      <div className="display_comment_container">
{
    commentsList.map((m)=>{
        return(
        <DisplayComments
        cId={m._id}
        commentBody={m.commentBody}
        userCommented={m.userCommented}
        />
        )

    })
}
      </div>
    </>
  );
}

export default Comments;
