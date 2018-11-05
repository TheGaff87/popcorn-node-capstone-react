import Chat from "./Chat";

import React from "react";

export default function Chatbox(props) {

  if (props.error) {
    return <div></div>
  }

  return (
    <Chat />
  );
}
