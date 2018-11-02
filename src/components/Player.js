import React from "react";

import "./Player.css";

export default function Player(props) {
  let currentVid = 'M4Ufs7-FpvU';
  if (props.videoId) {
    currentVid = props.videoId;
  }
  return (
    <div className="player-container">
      <div id="player" className="player">
        <iframe
          id="player"
          type="text/html"
          width="640"
          height="390"
          src={`https://www.youtube.com/embed/${currentVid}`}
          frameBorder="0"
        />
      </div>
    </div>
  );
}
