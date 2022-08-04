import Searchbar from "../components/search/searchbar";
import Items from "../components/items/items";
import AddBtn from "../components/add_btn/add_btn";
import Modalpage from "../components/modal/modalpage";
import Viewmodal from "../components/modal/view/viewmodal";
import PostModal from "../components/modal/post/postmodal";
import Updatemodal from "../components/modal/update/updatemodal";
import "../css/App.css";
import React, { useState, useEffect } from "react";
const axios = require("axios");

function AppLayout() {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [id, setid] = useState(0);
  const [list, setlist] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/v1/view")
      .then((Response) => {
        setlist(Response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const toggleModal = () => {
    setModal(!modal);
  };
  const ModalTypeChange = (name) => {
    setModalType(name);
  };

  return (
    <>
      <div className="layout">
        <h1 className="h">Todo List</h1>
        {modal && (
          <Modalpage>
            {modalType === "u" && <Updatemodal modal={toggleModal} />}
            {modalType === "v" && <Viewmodal modal={toggleModal} id={id} />}
            {modalType === "p" && <PostModal modal={toggleModal} />}
          </Modalpage>
        )}
        <Searchbar />

        {list &&
          list.map((items) => (
            <Items
              modal={toggleModal}
              type={ModalTypeChange}
              setid={setid}
              id={items.id}
              title={items.title}
              key={items._id}
            />
          ))}
        <AddBtn modal={toggleModal} type={ModalTypeChange} />
      </div>
    </>
  );
}

export default AppLayout;
