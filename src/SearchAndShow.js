import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

class SearchAndShow extends Component {

  render() {

    let title = `Let's find a theater!`;

    return (
      <aside className="sidebar" id="searchandshow">
        <h2>{title}</h2>
      </aside>
    )
  }
}

export default SearchAndShow
