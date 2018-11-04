import React from "react";

import { saveMess } from "../actions";
import { connect } from "react-redux";
import io from "socket.io-client";
import "./Chat.css";

export class Chat extends React.Component {
  constructor(props) {
    super(props);

    const Chat = this;
    this.onSubmit = this.onSubmit.bind(this);

    this.socket = io("https://popcorn-capstone-node.herokuapp.com");
    // this.socket = io('http://localhost:8080');

    // dispatch action when socket announces user sent message
    this.socket.on("RECEIVE_MESSAGE", function(data) {
      Chat.props.dispatch(saveMess(data));
    });
  }

  // close socket when user leaves
  componentWillUnmount() {
    this.socket.close();
  }

  // emit chat message on Submit
  onSubmit(e) {
    e.preventDefault();
    this.socket.emit("SEND_MESSAGE", {
      text: this.textInput.value,
      user: this.props.user
    });
    this.textInput.value = "";
  }

  render() {
    const messages = this.props.chatHistory.map((data, index) => {
      return (
        <li key={index}>
          <span className="user">{data.user}</span>{" "}
          <span className="msg">{data.text}</span>
        </li>
      );
    });
    return (
      <div className="chat-container">
        <button id="sync">Sync</button>
        <div className="chat-box">
          <ul id="messages" ref="chatbox">{messages}</ul>
          <form id="chat-form" onSubmit={this.onSubmit}>
            <input type="text" ref={input => (this.textInput = input)} />
            <button>Send</button>
          </form>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user,
  chatHistory: state.chatHistory
});

export default connect(mapStateToProps)(Chat);
