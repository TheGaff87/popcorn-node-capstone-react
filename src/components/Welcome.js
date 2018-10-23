import React from "react";

import './Welcome.css';

export default function Welcome(props) {
  return (
    <p className="welcome">
      Welcome, {props.person}!
    </p>
  );
}
