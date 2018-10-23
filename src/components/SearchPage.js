import React from "react";
import Nav from "./Nav";
import SearchForm from "./SearchForm";
import Videos from './Videos';

import './SearchPage.css';

export default function SearchPage(props) {
  return (
    <div>
      <Nav />
      <section className="form-search">
          <h2>Search</h2>
          <SearchForm />
          <Videos />
      </section>
    </div>
  );
}

