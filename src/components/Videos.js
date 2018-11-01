import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";

import "./Video.css";

export class Videos extends React.Component {
  render() {
    console.log(this.props.watchlist);
    if (this.props.loading) {
      return (
        <Spinner className="spinner'" name="three-bounce" color="fuchsia" />
      );
    }
    const videos = this.props.watchlist.map((video, index) => {
      return (<div className="item" key={index}>
        <h3>{video.title}</h3>
        <button type="button" className="remove-btn" id="remove-video">Remove</button>
        <button type="button">
          <img src={video.thumbnail} alt={video.title} />
        </button>
      </div>)
    });
    return (<div className="video-container">{videos}</div>)
  }
}

export const mapStateToProps = state => ({
  watchlist: state.watchlist,
  loading: state.loading
});

export default connect(mapStateToProps)(Videos);
