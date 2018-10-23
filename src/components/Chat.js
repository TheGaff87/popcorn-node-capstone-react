import React from "react";

import './Chat.css';

export default function Chat(props) {
  return (
    <div className="chat-container">
      <button id="sync">Sync</button>
      <div className="chat-box">
        <div>
          <span>Joe 12:45pm</span>
          <p>How are you?</p>
        </div>
        <div>
          <span>Jane 12:46pm</span> 
          <p>Great! Ready to watch a vid?</p>
        </div>
        <div>
          <span>{props.person} </span>
          <p>{props.message}</p>
        </div>
      </div>
    </div>
  );
}
