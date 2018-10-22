import React from "react";
import Welcome from "./Welcome";
import Header from "./Header";
import SearchForm from "./SearchForm";
import Chat from "./Chat";
import Player from "./Player";
import Footer from "./Footer";

import "./App.css";

export default function Main() {
  return (
    <main role="main">
      <Welcome />
      <Header />
      <SearchForm />
      <section role="region" className="interactive">
        <Player />
        <Chat />
        <form className="sync-form" />
      </section>
      <Footer />
    </main>
  );
}
