import React from "react";
import "../../css/close.css";
import close from "../../assets/clo.svg";

function Close({ modal }) {
  return (
    <button className="closebtn" onClick={modal}>
      <img src={close}></img>
    </button>
  );
}

export default Close;
