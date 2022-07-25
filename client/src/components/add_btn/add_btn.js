import React from "react";
import "../../css/Addbtn.css";

function AddBtn({ modal, type }) {
  const actionhandeler = () => {
    type("p");
    modal();
  };
  return (
    <>
      <button className="addbtn" onClick={actionhandeler}>
        Add
      </button>
    </>
  );
}
export default AddBtn;
