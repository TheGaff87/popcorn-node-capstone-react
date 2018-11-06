import Chat from "./Chat";
import UsersLoggedIn from "./UsersLoggedIn";

import React from "react";

export default function Chatbox(props) {

  if (props.error) {
    return <div></div>
  }

  return (
    <section className="chat-details">
      <Chat />
      <UsersLoggedIn />
    </section>
  );
}
