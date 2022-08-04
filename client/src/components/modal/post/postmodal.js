import React from "react";
import Close from "../../close/close";
import "../../../css/postmodal.css";
import { httpAddItem } from "../../../hooks/requests";
import { useState, useRef } from "react";

function PostModal({ modal }) {
  const nameEl = React.useRef(null);
  const passwordEl = React.useRef(null);
  const rememberMeEl = React.useRef(null);
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      username: nameEl.current.value,
      password: passwordEl.current.value,
      rememberMe: rememberMeEl.current.checked,
    };

    // Submit form details to login endpoint etc.
    // ...
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="postmodalcontainer">
        <div className="closebtncont">
          <Close modal={modal} />
        </div>
        <div className="titlecontainer">
          <div className="ptinfo">
            <label for="title">Title</label>
            <input type="text" id="title" required></input>
          </div>
        </div>
        <div className="posttxt">
          <textarea
            className="postinput"
            rows="10"
            cols="50"
            placeholder="type something .."
            value={textarea}
            onChange={(e) => setTextarea(e.target.value)}
          />
        </div>

        <div className="postbtnarea">
          <button className="postbtn">Add</button>
        </div>
      </div>
    </form>
  );
}

export default PostModal;

/*
function LoginForm(props) {
  const nameEl = React.useRef(null);
  const passwordEl = React.useRef(null);
  const rememberMeEl = React.useRef(null);

  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      username: nameEl.current.value,
      password: passwordEl.current.value,
      rememberMe: rememberMeEl.current.checked,
    }

    // Submit form details to login endpoint etc.
    // ...
  };

  return (
     <form onSubmit={handleSubmit}>
       <input type="text" placeholder="username" ref={nameEl} />
       <input type="password" placeholder="password" ref={passwordEl} />
       <label>
         <input type="checkbox" ref={rememberMeEl} />
         Remember me
       </label>
       <button type="submit" className="myButton">Login</button>
  
   );
}
*/