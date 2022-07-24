import React from "react";
import "../../css/modalpage.css";
import Updatemodal from "./update/updatemodal";

function Modalpage() {
  return (
    <div className="modal">
      <div className="overlay">
        <div className="modalcontent">
          <Updatemodal />
        </div>
      </div>
    </div>
  );
}

export default Modalpage;
