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

  renderResults() {
    console.log("In Search Page. Props: ", this.props);

    if (this.props.loading) {
      return (
        <Spinner className="spinner'" name="three-bounce" color="fuchsia" />
      );
    }

    console.log("****************Videos****************", this.props.videos);
    if (this.props.videos.items) {
      const videos = this.props.videos.items.map((video, index) => {
        return (
          <div className="item" key={index} id={video.id.videoId}>
            <h3>{video.snippet.title}</h3>
            <button>
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.thumbnails.title}
            />
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
