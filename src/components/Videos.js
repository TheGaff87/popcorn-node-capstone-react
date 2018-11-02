import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";

import { deleteVideo } from "../actions";

import "./Video.css";

export class Videos extends React.Component {

  deleteVideo(target) {
    console.log(target.id);
    this.props.dispatch(deleteVideo(target.id, this.props.authToken));
  }

  render() {
    console.log(this.props.watchlist);
    if (this.props.loading) {
      return (
        <Spinner className="spinner'" name="three-bounce" color="fuchsia" />
      );
    }

    let videos = [];
    if (this.props.watchlist.length > 0) {
      videos = this.props.watchlist.map((video, index) => {
        return (<div className="item" key={index}>
          <h3>{video.title}</h3>
          <button type="button" id={video._id} className="remove-btn" onClick={(e) => this.deleteVideo(e.currentTarget)}>Remove</button>
          <button type="button">
            <img src={video.thumbnail} alt={video.title} />
          </button>
        </div>)
      });
    }
    return (<div className="video-container">{videos}</div>)
  }
}

export const mapStateToProps = state => ({
  watchlist: state.watchlist,
  loading: state.loading,
  authToken: state.authToken
});

export default connect(mapStateToProps)(Videos);
