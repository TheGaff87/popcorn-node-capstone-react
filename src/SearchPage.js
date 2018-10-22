import React from "react";
import Welcome from "./Welcome";
import Header from "./Header";
import SearchForm from "./SearchForm";
import Videos from './Videos';
import Footer from "./Footer";

export default function SearchPage(props) {
  return (
    <div>
      <Welcome />
      <Header />
      <section className="form-search">
          <h2>Search</h2>
          <SearchForm />
          <Videos />
      </section>
      <Footer />
    </div>
  );
}

