import React from "react";
import Add_Btn from "../../add_btn/add_btn";
import Close from "../../close/close";
import "../../../css/postmodal.css";

function PostModal() {
  return (
    <div className="postmodalcontainer">
      <div className="closebtncont">
        <Close />
      </div>
      <div className="posttxt">
        <textarea
          className="postinput"
          rows="10"
          cols="50"
          placeholder="type something .."
        />
      </div>
      <div className="postimginsert">
        <input type="file" id="img" name="img" accept="image/*" />
      </div>
      <div className="postbtnarea">
        <Add_Btn />
      </div>
    </div>
  );
}

export default PostModal;
