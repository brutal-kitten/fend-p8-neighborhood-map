import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import SearchBar from './SearchBar'
import ShowResult from './ShowResult'
import PropTypes from 'prop-types'

class SearchAndShow extends Component {

  static propTypes = {
    locations: PropTypes.array.isRequired
  }

  render() {

    let title = `Let's find a theater!`;

    return (
      <aside className="sidebar" id="searchandshow">
        <h2>{title}</h2>
        <SearchBar/>
        <ShowResult locations={this.props.locations}/>
      </aside>
    )
  }
}

export default SearchAndShow
