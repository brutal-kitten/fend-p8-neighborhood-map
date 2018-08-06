import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import SearchBar from './SearchBar'
import ShowResult from './ShowResult'

class SearchAndShow extends Component {

  render() {

    let title = `Let's find a theater!`;

    return (
      <aside className="sidebar" id="searchandshow">
        <h2>{title}</h2>
        <SearchBar/>
        <ShowResult/>
      </aside>
    )
  }
}

export default SearchAndShow
