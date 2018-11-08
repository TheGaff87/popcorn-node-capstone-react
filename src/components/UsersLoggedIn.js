import React from "react";
import { connect } from "react-redux";

import "./UsersLoggedIn.css";

export class UsersLoggedIn extends React.Component {
  render() {
    let userList;
    if (this.props.chatUsers !== undefined) {
      if (this.props.chatUsers.length > 0) {
        userList = this.props.chatUsers.map((user, index) => {
          return <li key={index}>{user.usersLoggedIn}</li>;
        });
      }
    }

    return (
      <div className="users-container">
        Online: <ul className="chat-users">{userList}</ul>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  chatUsers: state.chatUsers
});

export default connect(mapStateToProps)(UsersLoggedIn);
