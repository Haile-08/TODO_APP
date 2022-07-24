import React from "react";
import "../../css/modalpage.css";
import PostModal from "./post/postmodal";

function Modalpage({ modal }) {
  return (
    <div className="modal">
      <div className="overlay">
        <div className="modalcontent">
          <PostModal modal={modal} />
        </div>
      </div>
    </div>
  );
}

export default Modalpage;
