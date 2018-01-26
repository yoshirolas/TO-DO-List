import React, { Component } from 'react';
import './Header.css';
import SearchBar from '../containers/SearchBar';
import ProgressBar from '../containers/ProgressBar';


class Header extends Component {

  render() {
    return (
      <header>
        <SearchBar /> 
        <ProgressBar />
      </header>
    );
  }
}

export default Header;