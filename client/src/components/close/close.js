import React from "react";
import "../../css/close.css";

function Close({ modal, view, update, post, type }) {
  const closehandler = () => {
    modal();
    if (type === "u") {
      update();
    }
    if (type === "v") {
      view();
    }
    if (type === "p") {
      post();
    }
  };
  return (
    <button className="closebtn" onClick={closehandler}>
      <p>X</p>
    </button>
  );
}

export default Close;
