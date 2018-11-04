import React from "react";
import SearchForm from "./SearchForm";
import Chat from "./Chat";
import Player from "./Player";
import Spinner from "react-spinkit";

import { searchVideos, selectVideo, addVideo } from "../actions";
import { clearDropdown } from "../custom";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import './Main.css';

export class Main extends React.Component {

  // Clear the videos list if moving between pages
  componentWillUnmount() {
    clearDropdown(this.refs.dropdown, this.props.dispatch);
  }

  // Interacts with SearchForm and adds results to videos prop
  onSearch(term) {
    this.props.dispatch(searchVideos(term, this.props.authToken));
  }

  // Find the selected video from the videos prop and pass id to Player
  getVideo(target) {
    const id = target[0].id;
    const currentVideo = this.props.videos.find((video) => {
      return video.id.videoId === id;
    });

    if (currentVideo !== undefined) {
      this.props.dispatch(selectVideo(currentVideo, currentVideo.id.videoId));
      clearDropdown(this.refs.dropdown, this.props.dispatch);
    }
  }

  onAdd(props) {
    // Only results from search can dispatch addVideo -- default video
    if (this.props.currentVideo.hasOwnProperty('snippet')) {
      this.props.dispatch(addVideo(this.props.currentVideo, this.props.userID, this.props.authToken));
    }
  }

  renderResults() {
    if (this.props.loading) {
      return (
        <Spinner className="spinner'" name="three-bounce" color="fuchsia" />
      );
    }

    // Display list of videos matching search term and pass result to SearchForm
    if (this.props.videos.length > 0) {
      const videos = this.props.videos.map((video, index) => {
        return (
          <li key={index}>
            <button type="button" onClick={(e) => this.getVideo(e.currentTarget.children)}>
              <h3 id={video.id.videoId}>{video.snippet.title}</h3>
            </button>
          </li>
        );
      });

      return <ul className="results-dropdown" ref='dropdown'>{videos}</ul>;
    }
  }

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }

    if (this.props.videoId) {
      // Renders 'Add to Watchlist' btn only if there is a non-default video selected
      return (
        <main>
          <SearchForm onSearch={term=> this.onSearch(term)} results={this.renderResults()} />
            <section className="interactive">
              <Player videoId={this.props.videoId} />
              <div className="watchlist-btn"><button type="button" onClick={() => this.onAdd(this.props)}>Add to Watchlist</button></div>
              <Chat />
            </section>
        </main>
      );
    }
    return (
      <main>
        <SearchForm onSearch={term => this.onSearch(term)} results={this.renderResults()} />
        <section className="interactive">
          <Player />
          <Chat />
        </section>
      </main>
    );
  }
}

export const mapStateToProps = state => ({
  authToken: state.authToken,
  currentVideo: state.currentVideo,
  error: state.error,
  loading: state.loading,
  loggedIn: state.user,
  userID: state.userID,
  videos: state.videos,
  videoId: state.videoId
});

export default connect(mapStateToProps)(Main);
