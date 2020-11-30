import React, { Component } from "react";

class Discover extends Component {
  state = {

  };

  render() {
    return (
      <div className="container">
        <div>
            <h1>Make New Friends</h1>
            <h2>Thumbs up on any pups that you'd like to meet</h2>

        </div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default Discover;

