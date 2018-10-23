import React from "react";

import './Player.css';

export default function Player() {
  return (
    <div className="player-container">
      {/* The IFrame API will replace this <div> tag. */}
      <div id="player" className="player" />
    </div>
  );
}
