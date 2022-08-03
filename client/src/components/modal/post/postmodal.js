import React from "react";
import Close from "../../close/close";
import "../../../css/postmodal.css";
import  {httpGetlist,httpAddItem } from '../../../hooks/requests';
import  { useState,useRef } from "react";



function PostModal({ modal }) {
  const [add,setadd] = useState({
    id: 0,
    title:'',
    body:''
  })
  return (
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
        />
      </div>

      <div className="postbtnarea">
        <button className="postbtn">Add</button>
      </div>
    </div>
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
     </form>
   );
}
*/