import React, { useState } from "react";

function DisplayComments({ cId,userCommented, commentBody }) {
    const [Edit, setEdit] = useState(false);
    const [cmtBdy, setcmtBdy] = useState("");
    const [cmtId, setcmtId] = useState("");

    const handleEdit = (ctId, ctBdy) => {
        setEdit(true);
        // setcmtId(ctId);
        setcmtBdy(ctBdy);
      };
      const handleOnSubmit = (e) => {
        e.preventDefault();
        setEdit(false);
    }
  return (
<>
      {Edit ? (
        <>
          <form
            className="comments_sub_form_comments"
            // onSubmit={handleOnSubmit}
          >
            <input
              type="text"
              onChange={(e) => setcmtBdy(e.target.value)}
              placeholder="Edit comment..."
              value={cmtBdy}
              className="comment_ibox"
            />
            <input
              type="submit"
              value="Change"
              className="comment_add_btn_comments"
            />
          </form>
        </>
      ) : (
        <p className="comment_body">{commentBody}</p>
      )}
      <p className="usercommented">- {userCommented} commented</p>
      <p className="EditDel_DisplayCommendt">
        <i onClick={() => handleEdit(cId, commentBody)}>Edit</i>
        <i >Delete</i>
      </p>
    </>
    
  );
}

export default DisplayComments;