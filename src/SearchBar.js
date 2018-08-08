import React, { Component } from 'react';
import PropTypes from 'prop-types'

class SearchBar extends Component {


  render() {
    return (
      <div className="searchBar">
        <div className='options-box'>
          <input id="show-listing" onClick={this.props.showListing} type="button" value="Show Listing"/>
          <input id="hide-listing" onClick={this.props.hideListing} type="button" value="Hide Listing"/>
        </div>
      </div>
    )
  }
}

export default SearchBar
