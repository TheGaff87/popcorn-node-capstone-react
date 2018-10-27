import React from "react";

export default class SearchForm extends React.Component {
  constructor(props) {
      super(props);
      this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('props:', this.props);
    const input = this.textInput.value.trim();
    console.log(this);
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
            placeholder="What do you want to watch right now?"
            ref={input => this.textInput = input}
          />
        </label>
        <button>Search</button>
      </form>
    );
  }
}
