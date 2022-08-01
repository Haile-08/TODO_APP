import React from "react";
import "../../css/modalpage.css";

function Modalpage({ children }) {
  return (
    <div className="modal">
      <div className="overlay">
        <div className="modalcontent">{children}</div>
      </div>
    </div>
  );
}

export default Modalpage;
