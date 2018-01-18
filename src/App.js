import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

class App extends Component {

	createCategory(item) {
		return (
			<li className>
				{item.categoryText}
			</li>  	
    );
	}
	
  render() {
  	let listCategory = this.props.categoryList.map(this.createCategory);
  	console.log(this.props.categoryList)
    return (
			<ul className="listCategory">
				{listCategory}
			</ul>  	
    );
  }
}

function mapStateToProps(state) {
	return {
		categoryList: state
	}
}

export default connect(mapStateToProps)(App);

