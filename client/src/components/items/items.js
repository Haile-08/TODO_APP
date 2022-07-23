import "../../css/item.css";
import close from "../../assets/close.svg";
import edit from "../../assets/edit.svg";
import React from "react";

function Items() {
  return (
    <div className="container">
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
            <button>
              <img src={edit} alt="edit" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
