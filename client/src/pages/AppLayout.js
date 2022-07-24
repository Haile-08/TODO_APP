import Searchbar from "../components/search/searchbar";
import Items from "../components/items/items";
import Add_Btn from "../components/add_btn/add_btn";
import Modalpage from "../components/modal/modalpage";

import "../css/App.css";

import React, { useState } from "react";

function AppLayout() {
  const [modaltype, setmodaltype] = useState("");
  const [modal, setModal] = useState(false);
  const [update, setupadte] = useState(false);
  const [view, setView] = useState(false);
  const [post, setPost] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  const toggleupdate = () => {
    setupadte(!update);
  };
  const toggleview = () => {
    setView(!view);
  };
  const togglepost = () => {
    setPost(!post);
  };
  const settypep = () => {
    setmodaltype("p");
  };
  const settypev = () => {
    setmodaltype("v");
  };
  const settypeu = () => {
    setmodaltype("u");
  };

  return (
    <div className="layout">
      <h1 className="h">Todo List</h1>
      {modal && (
        <Modalpage
          modal={toggleModal}
          update={update}
          updatetog={toggleupdate}
          view={view}
          viewtog={toggleview}
          post={post}
          posttog={togglepost}
          type={modaltype}
        />
      )}
      <Searchbar />
      <Items
        view={toggleview}
        update={toggleupdate}
        typev={settypev}
        typeu={settypeu}
      />
      <Add_Btn modal={toggleModal} type={settypep} post={togglepost} />
    </div>
  );
}

export default AppLayout;
