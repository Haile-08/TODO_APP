import React from "react";
import "../../css/Addbtn.css";

function Add_Btn({ modal, type, post }) {
  const actionhandeler = () => {
    type();
    modal();
    post();
  };
  return (
    <>
      <button className="addbtn" onClick={actionhandeler}>
        Add
      </button>
    </>
  );
}
export default Add_Btn;
