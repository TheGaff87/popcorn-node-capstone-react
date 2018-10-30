import React from "react";
import SearchForm from "./SearchForm";
import Chat from "./Chat";
import Player from "./Player";
import Spinner from "react-spinkit";

import { connect } from "react-redux";
import { searchVideos, playVideo } from "../actions";

import './Main.css';

export class Main extends React.Component {
  onSearch(text) {
    this.props.dispatch(searchVideos(text));
  }

  getVideo(target) {
    const id = target[0].id;
    this.props.dispatch(playVideo(id));
  }

  renderResults() {
    console.log("Inside Main search form: ", this.props);

    if (this.props.loading) {
      return (
        <Spinner className="spinner'" name="three-bounce" color="fuchsia" />
      );
    }
    
    if (this.props.videos.items) {
      const videos = this.props.videos.items.map((video, index) => {
        return (
          <li key={index}>
            <button type="button" onClick={(e) => this.getVideo(e.currentTarget.children)}>
              <h3 id={video.id.videoId}>{video.snippet.title}</h3>
            </button>
          </li>
        );
      });

      return <ul className="results-dropdown">{videos}</ul>;
    }
  }

  render() {
    return (
      <main>
        <SearchForm onSearch={text => this.onSearch(text)} results={this.renderResults()} />
        <section className="interactive">
          <Player videoId={this.props.videoId}/>
          <Chat />
        </section>
      </main>
    );
  }
}

export const mapStateToProps = state => ({
  videos: state.videos,
  user: state.user,
  loading: state.loading,
  error: state.error,
  videoId: state.videoId
});

export default connect(mapStateToProps)(Main);
