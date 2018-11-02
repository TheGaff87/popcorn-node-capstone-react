import React from "react";
import YouTube from "react-youtube";

import { connect } from "react-redux";

import "./Player.css";

export class Player extends React.Component {

  getTime(e) {
    var time = e.target.getCurrentTime();
    console.log(time);
  }

  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 0
      }
    };

    let currentVid = "M4Ufs7-FpvU";
    if (this.props.videoId) {
      currentVid = this.props.videoId;

    }

    return (
      <div className="player-container">
        <div id="player" className="player">
          <YouTube videoId={currentVid} opts={opts} onPause={(e) => this.getTime(e)}/>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  videoId: state.videoId
});

export default connect(mapStateToProps)(Player);
