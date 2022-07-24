import React from "react";
import Close from "../../close/close";
import "../../../css/updatemodal.css";
import img from "../../../assets/img.jpeg";

function Updatemodal({ modal, update, type }) {
  return (
    <div className="updatecontainer">
      <div className="closebtncont">
        <Close modal={modal} update={update} type={type} />
      </div>
      <div className="updateimg">
        <div className="imgcont">
          <img src={img} alt="j" />
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
