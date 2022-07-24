import Searchbar from "../components/search/searchbar";
import Items from "../components/items/items";
import Add_Btn from "../components/add_btn/add_btn";
import Modal from "../hooks/modal";
import Modalpage from "../components/modal/modalpage";

import "../css/App.css";

import React, { useState } from "react";

function AppLayout() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div className="layout">
      <h1 className="h">Todo List</h1>
      {modal && <Modalpage modal={toggleModal} />}
      <Searchbar />
      <Items />
      <Add_Btn modal={toggleModal} />
    </div>
  );
}

export default AppLayout;
