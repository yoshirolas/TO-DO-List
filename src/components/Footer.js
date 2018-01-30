import React, { Component } from 'react';
import UndoRedo from '../containers/UndoRedo';
import './Footer.css';


class Footer extends Component {
	
  render() {

    return (
      <footer>
        <UndoRedo />
      </footer>
    );
  }
}

export default Footer;