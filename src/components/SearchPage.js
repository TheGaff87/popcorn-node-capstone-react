import React from "react";
import Nav from "./Nav";
import SearchForm from "./SearchForm";
import Videos from "./Videos";

import {connect} from 'react-redux';
import {searchVideos} from '../actions';

import "./VideoPages.css";

export class SearchPage extends React.Component {
  onSearch(text) {
    this.props.dispatch(searchVideos(text));
  }

  render() {
    return (
      <div>
        <Nav />
        <section className="form-search">
          <h2>Search</h2>
          <SearchForm onSearch={text => this.onSearch(text)}/>
          <Videos />
        </section>
      </div>
    );
  }
}

export default connect()(SearchPage);