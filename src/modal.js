import React from "react";
import ReactDOM from "react-dom";
import history from "./history";
import { Link } from 'react-router-dom';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={() => history.push("/")} className="ui dimmer modals visible active">
      <div onClick={e=> e.stopPropagation()} className="ui standard modal visible active" style={{width:"600px"}}>
        
          <div className="header">DELETE STREAM</div>
          <div className="content">
            {props.title}
          </div>
          <div className="actions">
            <button className="ui negative button" onClick={props.onSubmit}>Delete</button>
            <Link to="/" className="ui primary button">Cancel</Link>
          
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
