import Searchbar from "../components/search/searchbar";
import Items from "../components/items/items";
import Add_Btn from "../components/add_btn/add_btn";

import "../css/App.css";

import React from "react";

function AppLayout() {
  return (
    <div className="layout">
      <h1 className="h">Todo List</h1>
      <Searchbar />
      <Items />
      <Add_Btn />
    </div>
  );
}

export default AppLayout;
