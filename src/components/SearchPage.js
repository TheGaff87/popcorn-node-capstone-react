import React from "react";
import Nav from "./Nav";
import SearchForm from "./SearchForm";
import Spinner from "react-spinkit";

import { connect } from "react-redux";
import { searchVideos } from "../actions";

import "./Video.css";
import "./VideoPages.css";

export class SearchPage extends React.Component {
  onSearch(text) {
    console.log("onSearch!");
    this.props.dispatch(searchVideos(text, this.props.authToken));
  }

  playVideo(target) {
    console.log(target)
    // const currentVideo = this.props.watchlist.find(video => video.videoID === target.id);
    // this.props.dispatch(selectVideo(currentVideo, target.id));
  }

  renderResults() {
    console.log("In Search Page. Props: ", this.props);

    if (this.props.loading) {
      return (
        <Spinner className="spinner'" name="three-bounce" color="fuchsia" />
      );
    }

    if (this.props.videos.length > 0) {
      const videos = this.props.videos[0].items.map((video, index) => {
        return (
          <div className="item" key={index}>
            <h3>{video.snippet.title}</h3>
            <button type="button" id={video.id.videoId} onClick={(e) => this.playVideo(e.currentTarget)}>
              <img
                src={video.snippet.thumbnails.medium.url} alt={video.snippet.thumbnails.title} />
            </button>
          </div>
        );
      });

      return <div className="video-container">{videos}</div>;
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <section className="form-search">
          <h2>Search</h2>
          <SearchForm onSearch={text => this.onSearch(text)} />
          <div className="video-outer">{this.renderResults()}</div>
        </section>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  videos: state.videos,
  user: state.user,
  loading: state.loading,
  error: state.error,
  authToken: state.authToken
});

export default connect(mapStateToProps)(SearchPage);
