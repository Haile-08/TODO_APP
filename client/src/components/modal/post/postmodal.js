import React from "react";
import Add_Btn from "../../add_btn/add_btn";
import "../../../css/postmodal.css";

function PostModal() {
  return (
    <div className="container">
      <div className="txtarea">
        <input
          type="text"
          placeholder="type something..."
          className="txtinput"
        />
      </div>
      <div className="imginsert">
        <input type="file" id="img" name="img" accept="image/*" />
      </div>
      <div className="btnarea">
        <Add_Btn />
      </div>
    </div>
  );
}

export default PostModal;
