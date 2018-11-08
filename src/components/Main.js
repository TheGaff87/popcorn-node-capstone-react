import React from "react";
import SearchForm from "./SearchForm";
import Player from "./Player";

import { searchVideos, selectVideo, addVideo } from "../actions";
import { clearDropdown } from "../custom";

import Spinner from "react-spinkit";
import requiresLogin from './requires-login';
import { connect } from "react-redux";

import './Main.css';
import "./Components.css";

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
    // Renders 'Add to Watchlist' btn and pass prop videoId only if there is a non-default video selected
    let vidID;
    let wl_btn;
    if (this.props.videoId) {
      vidID = this.props.videoId;
      wl_btn = <div className="watchlist-btn"><button type="button" onClick={() => this.onAdd(this.props)}>Add to Watchlist</button></div>
    }

    return (
      <main>
        <SearchForm onSearch={term => this.onSearch(term)} placeholder='Search by title' results={this.renderResults()} />
        {this.props.spinner}
        <section className="interactive">
        <Player videoId={vidID} />
        {wl_btn}
        </section>
      </main>
    );
  }
}

export const mapStateToProps = state => ({
  authToken: state.authToken,
  currentVideo: state.currentVideo,
  userID: state.userID,
  videos: state.videos,
  videoId: state.videoId
});

export default requiresLogin()(connect(mapStateToProps)(Main));
