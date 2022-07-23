import Searchbar from "../components/search/searchbar";
import Items from "../components/items/items";
import "../css/App.css";

function AppLayout() {
  return (
    <div className="layout">
      <h1 className="h">Todo List</h1>
      <Searchbar />
      <Items />
    </div>
  );
}

export default AppLayout;
