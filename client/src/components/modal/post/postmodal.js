import React from "react";
import Close from "../../close/close";
import "../../../css/postmodal.css";
import { useState } from "react";
const axios = require("axios");

function PostModal({ modal }) {
  const [id, setId] = useState(1);
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setId(id + 1);
    const data = { id: id, title: title, body: body };
    console.log(data);
    axios
      .post("/add", data)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  return (
    <div className="postmodalcontainer">
      <div className="closebtncont">
        <Close modal={modal} />
      </div>
      <div className="titlecontainer">
        <div className="ptinfo">
          <label for="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            required
          ></input>
        </div>
      </div>
      <div className="posttxt">
        <textarea
          className="postinput"
          rows="10"
          cols="50"
          placeholder="type something .."
          value={body}
          onChange={(e) => setbody(e.target.value)}
        />
      </div>

      <div className="postbtnarea">
        <button className="postbtn" onClick={handleSubmit}>
          Add
        </button>
      </div>
    </div>
  );
}

export default PostModal;
