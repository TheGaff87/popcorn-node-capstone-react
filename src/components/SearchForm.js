import React from "react";

export default class SearchForm extends React.Component {
  constructor(props) {
      super(props);
      this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const input = this.textInput.value.trim();
    if (input && this.props.onSearch) {
        this.props.onSearch(this.textInput.value);
    }
    this.textInput.value = '';
  }

  render() {
    return (
      <form className="search-video" onSubmit={this.onSubmit}>
        <label htmlFor="video-title">
          <input
            id="video-title"
            type="text"
            placeholder={this.props.placeholder}
            ref={input => this.textInput = input}
            autoComplete="off"
            autoFocus
          />
        {this.props.results}
        </label>
        <button>Search</button>
      </form>
    );
  }
}
