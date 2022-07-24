import React from "react";
import Close from "../../close/close";
import "../../../css/updatemodal.css";
import img from "../../../assets/img.jpeg";

function Viewmodal({ modal, view, type }) {
  return (
    <div className="updatecontainer">
      <div className="closebtncont">
        <Close modal={modal} view={view} type={type} />
      </div>
      <div className="updateimg">
        <div className="imgcont">
          <img src={img} alt="j" />
        </div>
      </div>
      <div className="updatetxt">
        <div className="utxt">tex....</div>
      </div>
      <div className="updatebtn">
        <button className="ubtn">Update</button>
      </div>
    </div>
  );
}

export default Viewmodal;
