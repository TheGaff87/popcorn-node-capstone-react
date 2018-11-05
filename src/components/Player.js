import React from "react";
import YouTube from "react-youtube";

import { searchVideosInitial } from "../actions";
import { connect } from "react-redux";
import io from "socket.io-client";

import "./Player.css";

export class Player extends React.Component {
  constructor(props) {
    super(props)
    this.shareVid = this.shareVid.bind(this);
    this.socket = io("https://popcorn-capstone-node.herokuapp.com");
  }

  shareVid(e) {
    e.preventDefault();
    const player = this.refs.player.internalPlayer;
    player.getCurrentTime()
      .then(time => {
        const myCurrVid = this.props.currentVideo;
        this.socket.emit("SEND_MESSAGE", {
          text: `Watch ${myCurrVid.snippet.title} with me!`,
          time,
          currentVideo: this.props.currentVideo,
          user: this.props.user
        });
      });
  }

  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 0
      }
    };

    if (this.props.loadNumber < 1) {
      this.props.dispatch(searchVideosInitial("soundtrack", this.props.authToken));
    }

    if (this.props.time) {
      const player = this.refs.player.internalPlayer;
      const time = this.props.time;

      player.playVideo()
        .then(item => {
          seekto(time);
        });

      function seekto(time) {
        player.seekTo(time);
      }
    }

    return (
      <div className="player-container">
        <div id="player" className="player">
          <YouTube
            videoId={this.props.videoId}
            opts={opts}
            ref="player"
          />
        </div>
        <button onClick={this.shareVid}>
          Share in Chat
        </button>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  videoId: state.videoId,
  loadNumber: state.loadNumber,
  authToken: state.authToken,
  user: state.user,
  currentVideo: state.currentVideo,
  time: state.time
});

export default connect(mapStateToProps)(Player);
