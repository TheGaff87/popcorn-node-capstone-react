import React from "react";

export default function Chat(props) {
  return (
    <div className="chat-container">
      <button id="sync">Sync Up</button>
      <div className="chat-box">
        <div>
          <span>Joe</span>
          <p>How are you?</p>
        </div>
        <div>
          <span>Jane</span>
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
