import React from "react";
import "../../css/modalpage.css";
import Viewmodal from "./view/viewmodal";
import PostModal from "./post/postmodal";
import Updatemodal from "./update/updatemodal";

function Modalpage({ modal, modalType,toggleModal}) {
  return (
    <div className="modal">
      <div className="overlay">
        <div className="modalcontent">
        {modal && (
             (modalType === "u" && (
                <Updatemodal
                  modal={toggleModal}
                />
              ))
              (modalType === "v" && (
                <Viewmodal    
                  modal={toggleModal}
                />
              ))
              (modalType === "p" && (
                <PostModal      
                  modal={toggleModal}
                />
         )) )}
        </div>
      </div>
    </div>
  );
}

export default Modalpage;
