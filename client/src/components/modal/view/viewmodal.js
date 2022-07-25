import React from "react";
import Close from "../../close/close";
import "../../../css/updatemodal.css";

function Viewmodal({ modal }) {
  return (
    <div className="updatecontainer">
      <div className="closebtncont">
        <Close modal={modal} />
      </div>
      <div className="updateimg">
        <div className="imgcont">
          <label>Title</label>
          <p>.......</p>
        </div>
      </div>
      <div className="updatetxt">
        <div className="utxt">
          <label>Info</label>
          <p className="infop">tex....</p>
        </div>
      </div>
    </div>
  );
}

export default Viewmodal;
