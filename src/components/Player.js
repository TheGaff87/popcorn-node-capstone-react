import React from "react";

import "./Player.css";

export default function Player(props) {
  return (
    <div className="player-container">
      {/* The IFrame API will replace this <div> tag. */}
      <div id="player" className="player">
        <iframe
          id="player"
          type="text/html"
          width="640"
          height="390"
          src={`https://www.youtube.com/embed/${props.videoId}`}
          frameBorder="0"
        />
      </div>
    </div>
  );
}
