import React from "react";
import Nav from "./Nav";
import SearchForm from "./SearchForm";
import Videos from './Videos';
import Spinner from "react-spinkit";

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

  renderResults() {
    if (this.props.loading) {
      return (
        <Spinner className="spinner'" name="three-bounce" color="fuchsia" />
      );
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <section className="form-search">
          <h2>Search</h2>
          <SearchForm onSearch={term => this.onSearch(term)} />
          <div className="video-outer" ref='videos'><Videos /></div>
        </section>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  videos: state.videos,
  loading: state.loading,
  error: state.error,
  authToken: state.authToken
});

export default connect(mapStateToProps)(SearchPage);
