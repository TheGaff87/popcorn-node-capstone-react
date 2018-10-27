import React from "react";
import SearchForm from "./SearchForm";
import Chat from "./Chat";
import Player from "./Player";

import {connect} from 'react-redux';
import {searchVideos} from '../actions';

export class Main extends React.Component {
  onSearch(text) {
    this.props.dispatch(searchVideos(text));
  }

  render() {
    return (
      <main>
        <SearchForm onSearch={text => this.onSearch(text)}/>
        <section className="interactive">
          <Player />
          <Chat />
        </section>
      </main>
    );
  }
}

export default connect()(Main);