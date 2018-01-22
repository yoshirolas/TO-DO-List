import React, { Component } from 'react';
// import './CategoryTree.css';
import { connect } from 'react-redux';
import RenameCategoryButton from './RenameCategoryButton';
import DeleteCategoryButton from './DeleteCategoryButton';
import AddChildrenCategoryButton from './AddChildrenCategoryButton';
import { clickCategory, showTaskList } from './actions/appActions';


class CategoryTree extends Component {

  categoryCliked = (item) => (event)=> {
    console.log("CATEGORY_ITEM_KLICKED");
    console.log(item.categoryId);
    console.log(item.parentCategoryId);
    this.props.dispatch(clickCategory(item.categoryId));
    this.props.dispatch(showTaskList());
  }

  createChildCategory = (item) => {
  	return (
  		<ul 
  			className={"categoryChildItem"}
	    	key={ item.categoryId } 
	    	onClick={ this.categoryCliked(item) }
	    >
				<li>
					{ item.categoryName }
					<RenameCategoryButton categoryId={ item.categoryId } parentCategoryId={ item.parentCategoryId } />
					<DeleteCategoryButton categoryId={ item.categoryId } parentCategoryId={ item.parentCategoryId } />
				</li>  
			</ul>	
    );
  }

	createCategory = (item) => {
		let test;
		if (item.child.length > 0) {
			test = item.child.map(this.createChildCategory)
		}

		return (
			<li 
        className={"categoryParentItem"}
        key={ item.categoryId } 
        onClick={ this.categoryCliked(item) }
      >
				{ item.categoryName }
				<RenameCategoryButton categoryId={ item.categoryId } parentCategoryId={ item.parentCategoryId } />
				<DeleteCategoryButton categoryId={ item.categoryId } parentCategoryId={ item.parentCategoryId } />
				{ !item.child 
          ? <div></div>
          : <AddChildrenCategoryButton categoryId={ item.categoryId } /> 
        }
        {test}
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