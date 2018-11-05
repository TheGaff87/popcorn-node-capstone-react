import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";

import { selectVideo, deleteVideo } from "../actions";
import { Redirect } from "react-router-dom";

import "./Video.css";

export class Videos extends React.Component {

  playVideo(target, group) {
    let currentVideo;
    if (group === 'search') {
      currentVideo = this.props.videos.find(video => video.id.videoId === target.id);
    }

    if (group === 'watchlist') {
      currentVideo = this.props.watchlist.find(video => video.videoID === target.id);
    }

    this.props.dispatch(selectVideo(currentVideo, target.id));
  }

  deleteVideo(target) {
    this.props.dispatch(deleteVideo(target.id, this.props.authToken));
  }

  render() {
    if (this.props.toMain) {
      return <Redirect to="/dashboard/user" />;
    }

    if (this.props.loading) {
      return (
        <Spinner className="spinner'" name="three-bounce" color="fuchsia" />
      );
    }

    let videoGallery = [];

    // for rendering search list
    if (this.props.videos.length > 0) {
      videoGallery = this.props.videos.map((video, index) => {
        return (
          <div className="item" key={index}>
            <h3>{video.snippet.title}</h3>
            <button className="thumbnail" type="button" id={video.id.videoId} onClick={(e) => this.playVideo(e.currentTarget, 'search')}>
              <img
                src={video.snippet.thumbnails.medium.url} alt={video.snippet.thumbnails.title} />
            </button>
          </div>
        );
      });
    }

    // for rendering watchlist
    if (this.props.watchlist.length > 0) {
      videoGallery = this.props.watchlist.map((video, index) => {
        return (<div className="item" key={index}>
          <h3>{video.title}</h3>
          <button type="button" id={video._id} className="remove-btn" onClick={(e) => this.deleteVideo(e.currentTarget)}>Remove</button>
          <button className="thumbnail" type="button" id={video.videoID} onClick={(e) => this.playVideo(e.currentTarget, 'watchlist')}>
            <img src={video.thumbnail} alt={video.title}/>
          </button>
        </div>)
      });
    }
    return (<div className="video-container">{videoGallery}</div>)
  }
}

export const mapStateToProps = state => ({
  videos: state.videos,
  watchlist: state.watchlist,
  loading: state.loading,
  authToken: state.authToken,
  toMain: state.toMain
});

export default connect(mapStateToProps)(Videos);
