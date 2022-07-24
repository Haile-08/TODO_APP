import React from "react";
import "../../css/modalpage.css";
import Updatemodal from "./update/updatemodal";
import Viewmodal from "./view/viewmodal";
import PostModal from "./post/postmodal";

function Modalpage({
  modal,
  update,
  view,
  post,
  updatetog,
  viewtog,
  posttog,
  type,
}) {
  return (
    <div className="modal">
      <div className="overlay">
        <div className="modalcontent">
          {view && <Viewmodal modal={modal} view={viewtog} type={type} />}
          {post && <PostModal modal={modal} post={posttog} type={type} />}
          {update && (
            <Updatemodal modal={modal} update={updatetog} type={type} />
          )}
          {console.log(post)}
        </div>
      </div>
    </div>
  );
}

export default Modalpage;
