import Searchbar from "../components/search/searchbar";
import Items from "../components/items/items";
import AddBtn from "../components/add_btn/add_btn";
import Modalpage from "../components/modal/modalpage";
import Viewmodal from "../components/modal/view/viewmodal";
import PostModal from "../components/modal/post/postmodal";
import Updatemodal from "../components/modal/update/updatemodal";


import { httpGetlist } from "../hooks/requests";

import "../css/App.css";

import React, { useState } from "react";

function AppLayout() {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState("");

  const toggleModal = () => {
    setModal(!modal);
  };
  const ModalTypeChange = (name) => {
    setModalType(name);
  };

  console.log(modal);
  {
    console.log(modalType);
  }

  return (
    <>
      <div className="layout">
        <h1 className="h">Todo List</h1>
        {modal && (
          <Modalpage>
            {console.log(modalType)}
            {modalType === "u" && <Updatemodal modal={toggleModal} />}
            {modalType === "v" && <Viewmodal modal={toggleModal} />}
            {modalType === "p" && <PostModal modal={toggleModal} />}
          </Modalpage>
        )}
        <Searchbar />

        {Object.values(httpGetlist).map((items, index) => (
          <Items
            modal={toggleModal}
            type={ModalTypeChange}
            title={items.title}
            body={items.body}
          />
        ))}
        <AddBtn modal={toggleModal} type={ModalTypeChange} />
      </div>
    </>
  );
}

export default AppLayout;