import React, { Component } from 'react';
// import './CategoryTree.css';
import { connect } from 'react-redux';
// import { delCategory } from './actions'
import RenameCategoryButton from './RenameCategoryButton';
import DeleteCategoryButton from './DeleteCategoryButton';
import RaisedButton from 'material-ui/RaisedButton';


class CategoryTree extends Component {

	createCategory(item) {
		const style = {
  		margin: 5,
  		height: 20,
  		minWidth: 40,
		};

		return (
			<li className="categoryItem" key={ item.categoryId }>
				{ item.categoryName }
				<RenameCategoryButton id={ item.categoryId } />
				<DeleteCategoryButton id={ item.categoryId } />
				<RaisedButton label="+" type='submit' style={ style } />
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
		categoryList: state.changeCategoryTree
	}
}

export default connect(mapStateToProps)(CategoryTree);