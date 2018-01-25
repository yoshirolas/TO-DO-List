import React, { Component } from 'react';
// import './Header.css';
import SearchBar from './SearchBar';
import ProgressBar from './ProgressBar';


class Header extends Component {

  render() {
    return (
      <header>
        <SearchBar /> 
        <ProgressBar className="progressBar"/>
      </header>
    );
  }
}

export default Header;