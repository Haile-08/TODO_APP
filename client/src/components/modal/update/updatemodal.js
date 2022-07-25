import React from "react";
import Close from "../../close/close";
import "../../../css/updatemodal.css";


function Updatemodal({ modal }) {
  return (
    <div className="updatecontainer">
      <div className="closebtncont">
        <Close modal={modal} />
      </div>
      <div className="title">
        <div title="tinfo">
          <label for="title">Title</label>
          <input type="text" id="title" required></input>
        </div>
      </div>
      <div className="updatetxt">
        <div className="utxt">
          <textarea
            className="postinput"
            rows="20"
            cols="68"
            placeholder="type something .."
          />
        </div>
      </div>
      <div className="updatebtn">
        <button className="ubtn">Update</button>
      </div>
    </div>
  );
}

export default Updatemodal;
