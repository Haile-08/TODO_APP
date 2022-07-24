import React from "react";
import "../../css/Addbtn.css";

function Add_Btn({ modal }) {
  return (
    <>
      <button className="addbtn" onClick={modal}>
        Add
      </button>
    </>
  );
}
export default Add_Btn;
