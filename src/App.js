import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

class App extends Component {
	
  render() {
  	console.log(this.props.categoryList)
    return (
    	<div>
    		hello> world
    	</div>    	
    );
  }
}

export default connect(state => {
	return {
		state: state
	}
})(App);

