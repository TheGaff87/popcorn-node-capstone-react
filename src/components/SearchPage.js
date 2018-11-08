import React from "react";
import Nav from "./Nav";
import SearchForm from "./SearchForm";
import Videos from "./Videos";

import requiresLogin from "./requires-login";
import { connect } from "react-redux";
import { searchVideos } from "../actions";
import { clearDropdown } from "../custom";

export class SearchPage extends React.Component {
  // Clear the videos list if moving between pages
  componentDidMount() {
    clearDropdown(this.refs.videos, this.props.dispatch);
  }

  componentWillUnmount() {
    clearDropdown(this.refs.videos, this.props.dispatch);
  }

  onSearch(term) {
    this.props.dispatch(searchVideos(term, this.props.authToken));
  }

  render() {
    return (
      <div>
        <Nav />
        <section className="form-search">
          <h2>Search</h2>
          <SearchForm
            placeholder="Search by video"
            onSearch={term => this.onSearch(term)}
          />
          <div className="video-outer" ref="videos">
            <Videos />
          </div>
        </section>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  videos: state.videos,
  error: state.error,
  authToken: state.authToken
});

export default requiresLogin()(connect(mapStateToProps)(SearchPage));
