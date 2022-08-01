import React from "react";
import Close from "../../close/close";
import "../../../css/postmodal.css";
import  { useState } from "react";



function PostModal({ modal }) {
  const [add,setadd] = useState({
    id: 0,
    title:'',
    body:''
  })
  return (
    <div className="postmodalcontainer">
      <div className="closebtncont">
        <Close modal={modal} />
      </div>
      <div className="titlecontainer">
        <div className="ptinfo">
          <label for="title">Title</label>
          <input type="text" id="title" required></input>
        </div>
      </div>
      <div className="posttxt">
        <textarea
          className="postinput"
          rows="10"
          cols="50"
          placeholder="type something .."
        />
      </div>

      <div className="postbtnarea">
        <button className="postbtn">Add</button>
      </div>
    </div>
  );
}

export default PostModal;
