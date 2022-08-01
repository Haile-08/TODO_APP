import "../../css/searchbar.css";

import React from "react";

function Searchbar({searchfun}) {

  return (<>
  {searchfun(1)}
  <input type="text" placeholder="search ..." className="search" />
  </>);
}

export default Searchbar;

