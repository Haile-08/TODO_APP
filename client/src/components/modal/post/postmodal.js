import React from "react";
import Close from "../../close/close";
import "../../../css/postmodal.css";
import img from "../../../assets/img.svg";

function PostModal({ modal }) {
  return (
    <div className="postmodalcontainer">
      <div className="closebtncont">
        <Close modal={modal} />
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
        <input type="file" id="file" accept="image/*" />
        <label for="file">
          <img src={img} />
          choose file
        </label>
      </div>
      <div className="postbtnarea">
        <button className="postbtn">Add</button>
      </div>
    </div>
  );
}

export default PostModal;
