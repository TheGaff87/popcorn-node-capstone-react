import React from "react";

import { sendMessage } from "../actions";
import { connect } from "react-redux";
import io from "socket.io-client";
import "./Chat.css";

export class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chatHistory: []
    };

    this.onSubmit = this.onSubmit.bind(this);

    this.socket = io("https://popcorn-capstone-node.herokuapp.com");

    this.socket.on("RECEIVE_MESSAGE", function(data) {
      addMessage(data);
    });

    const addMessage = data => {
      this.setState({ chatHistory: [...this.state.chatHistory, data] });
    };
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.dispatch(sendMessage(this.textInput.value, this.props.user));
    this.textInput.value = "";
  }

  render() {
    const messages = this.state.chatHistory.map((data, index) => {
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
          <ul id="messages">{messages}</ul>
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
  user: state.user
});

export default connect(mapStateToProps)(Chat);
