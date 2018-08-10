import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import SearchBar from './SearchBar'
import ShowResult from './ShowResult'
import PropTypes from 'prop-types'

class SearchAndShow extends Component {

  static propTypes = {
    selectedPlaces: PropTypes.array.isRequired
  }

  render() {

    let title = `Let's find a theater!`;

    return (
      <aside className="sidebar" id="searchandshow">
        <h2>{title}</h2>
        <SearchBar
          showListing={this.props.showListing}
          hideListing={this.props.hideListing}
          searchForPlace={this.props.searchForPlace}
        />
        <ShowResult
          selectedPlaces={this.props.selectedPlaces}
          onItemClick={this.props.onItemClick}
          />
      </aside>
    )
  }
}

export default SearchAndShow
