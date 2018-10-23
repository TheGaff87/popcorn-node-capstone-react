import React from "react";
// import Welcome from "./Welcome";
// import Nav from "./Nav";
import SearchForm from "./SearchForm";
import Chat from "./Chat";
import Player from "./Player";

import './Main.css';

export default function Main() {
  return (
    <main>
      <SearchForm />
      <section className="interactive">
        <Player />
        <Chat />
      </section>
    </main>
  );
}
