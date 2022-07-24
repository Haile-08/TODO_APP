import React from "react";
import "../../css/modalpage.css";
import PostModal from "./post/postmodal";

function Modalpage() {
  return (
    <div className="modal">
      <div className="overlay">
        <div className="modalcontent">
          <PostModal />
        </div>
      </div>
    </div>
  );
}

export default Modalpage;
