import React, { Component } from 'react';
// import './Header.css';
import SearchBar from './SearchBar';
import ProgressBar from './ProgressBar';


class Header extends Component {

  render() {
    return (
      <div>
        <SearchBar className="searchBar" /> 
        <ProgressBar className="progressBar"/>
      </div>
    );
  }
}

export default Header;