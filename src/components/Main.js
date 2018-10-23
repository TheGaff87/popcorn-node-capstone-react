import React from "react";
import SearchForm from "./SearchForm";
import Chat from "./Chat";
import Player from "./Player";

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
