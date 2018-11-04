import React from "react";
import YouTube from "react-youtube";

import { searchVideosInitial } from "../actions";
import { connect } from "react-redux";

import "./Player.css";

export class Player extends React.Component {
  constructor(props) {
    super(props)
    this.syncUp = this.syncUp.bind(this);
  }

  getTime(e) {
    var time = e.target.getCurrentTime();
    console.log(e.target);
    console.log(time);
  }

  syncUp(e) {
    e.preventDefault();
    const player = this.refs.player.internalPlayer;
    player.pauseVideo();
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

    return (
      <div className="player-container">
        <div id="player" className="player">
          <YouTube
            videoId={this.props.videoId}
            opts={opts}
            onPause={e => this.getTime(e)}
            ref="player"
          />
        </div>
        <button id="sync" onClick={this.syncUp}>
          Sync
        </button>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  videoId: state.videoId,
  loadNumber: state.loadNumber,
  authToken: state.authToken
});

export default connect(mapStateToProps)(Player);
