import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Footer.css';

class Footer extends Component {
	
  render() {
    const asd=5;
    return (
      <footer>
         <li><Link to={{
          pathname: '/category/'
        }}>link</Link></li>
      </footer>
    );
  }
}

export default Footer;