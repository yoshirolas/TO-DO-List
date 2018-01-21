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
    this.props.dispatch(clickCategory(item.categoryId));
    this.props.dispatch(showTaskList());
  }

	createCategory = (item) => {
		return (
			<li 
        className={ item.child ? "categoryChildItem" : "categoryParentItem"}
        key={ item.categoryId } 
        onClick={ this.categoryCliked(item) }
      >
				{ item.categoryName }
				<RenameCategoryButton id={ item.categoryId } />
				<DeleteCategoryButton id={ item.categoryId } />
				{ item.child 
          ? <div></div>
          : <AddChildrenCategoryButton id={ item.categoryId } /> 
        }
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