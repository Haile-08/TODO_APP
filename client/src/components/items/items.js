import "../../css/item.css";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Items() {
  return (
    <div className="container">
      <div className="img"></div>
      <div className="txt">
        <div className="title">this is the title</div>
        <div className="btn">
          <div className="update">
            <button>
              <FontAwesomeIcon icon="fa-solid fa-trash-can" />
            </button>
          </div>
          <div className="delete">
            <button>
              <FontAwesomeIcon icon="fa-solid fa-wrench" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
