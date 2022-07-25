import React from "react";
import "../../css/close.css";

function Close({ modal }) {
  return (
    <button className="closebtn" onClick={modal}>
      <p>X</p>
    </button>
  );
}

export default Close;
