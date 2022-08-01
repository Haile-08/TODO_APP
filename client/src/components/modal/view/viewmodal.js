import React from "react";
import Close from "../../close/close";
import "../../../css/updatemodal.css";
import {httpGetSearch} from '../../../hooks/requests'

function Viewmodal({ modal,id }) {
  
  let items = httpGetSearch(id);

  return (
    <div className="updatecontainer">
      <div className="closebtncont">
        <Close modal={modal} />
      </div>
      <div className="updateimg">
        <div className="imgcont">
          <label>Title</label>
          <p>{items.title}</p>
        </div>
      </div>
      <div className="updatetxt">
        <div className="utxt">
          <label>Info</label>
          <p className="infop">{items.body}</p>
        </div>
      </div>
    </div>
  );
}

export default Viewmodal;
