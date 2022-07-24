import "../../css/item.css";
import close from "../../assets/close.svg";
import edit from "../../assets/edit.svg";
import React from "react";

function Items({ view, update, typev, typeu }) {
  const viewhandler = () => {
    view();
    typev();
  };
  const updatehandler = () => {
    update();
    typeu();
  };
  return (
    <div className="container" onClick={viewhandler}>
      <div className="img"></div>
      <div className="txt">
        <div className="title">this is the title</div>
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
    </div>
  );
}

export default Items;
