import React from "react";
import Welcome from "./Welcome";
import Header from "./Header";
import SearchForm from "./SearchForm";
import Chat from "./Chat";
import Player from "./Player";


import "./App.css";

export default function Main() {
  return (
    <main>
      <Welcome />
      <Header />
      <SearchForm />
      <section className="interactive">
        <Player />
        <Chat />
        <form className="sync-form" />
      </section>
    </main>
  );
}
