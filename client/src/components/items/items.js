import "../../css/item.css";
import close from "../../assets/close.svg";
import edit from "../../assets/edit.svg";
import React from "react";

function Items({ modal, type, id, title, body, setid }) {
  const viewhandler = () => {
    modal();
    type("v");
    setid(id)
  };
  const updatehandler = () => {
    modal();
    type("u");
  };
  return (
    <div className="container">
      <div className="title" onClick={viewhandler}>
        {title}
      </div>
      <div className="btn">
        <div className="delete">
          <button>
            <img src={close} alt="close" />
          </button>
        </div>
        <div className="update">
          <button onClick={updatehandler}>
            <img src={edit} alt="edit" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Items;
