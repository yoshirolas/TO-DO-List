import React, { Component } from 'react';
// import './CategoryTree.css';
import { connect } from 'react-redux'


class CategoryTree extends Component {

	createCategory(item) {
		return (
			<li className="categoryItem" key={ item.categoryId }>
				{ item.categoryName }
			</li>  	
    );
	}
	
  render() {
  	let categoryList = this.props.categoryList.map(this.createCategory);
    return (
  		<ul className="categoryList">
				{ categoryList }
			</ul> 
    );
  }
}

function mapStateToProps(state) {
	return {
		categoryList: state
	}
}

export default connect(mapStateToProps)(CategoryTree);