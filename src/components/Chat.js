import React from "react";

import { testChat } from "../actions";
import { connect } from "react-redux";
import './Chat.css';

export class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
}


onSubmit(e) {
  e.preventDefault();
  console.log('Submitting line 15!', this.textInput.value);
  this.props.dispatch(testChat(this.textInput.value));
}


  render() {
    const messages = this.props.chatHistory.map((msg, index) => {
      return (
        <li key={index}>
          {msg}
        </li>
      );
    });
    return (
      <div className="chat-container">
        <button id="sync">Sync</button>
        <div className="chat-box">
          <ul id="messages">{messages}</ul>
          <form id="chat-form" onSubmit={this.onSubmit}>
            <input type="text" ref={input => this.textInput = input}/>
            <button>Send</button>
          </form>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  chatHistory: state.chatHistory
});

export default connect(mapStateToProps)(Chat);