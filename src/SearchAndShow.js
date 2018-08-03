import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

class SearchAndShow extends Component {

  render() {

    let title = `Let's find a theater!`;

    return (
      <div id="searchandshow">
        <h2>{title}</h2>
      </div>
    )
  }
}

export default SearchAndShow
