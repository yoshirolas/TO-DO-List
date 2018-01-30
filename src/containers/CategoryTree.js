import React, { Component } from 'react';
import './CategoryTree.css';
import { connect } from 'react-redux';
import RenameCategoryButton from './RenameCategoryButton';
import DeleteCategoryButton from './DeleteCategoryButton';
import AddChildrenCategoryButton from './AddChildrenCategoryButton';
import { clickCategory, closeTaskSettings } from '../actions/appActions';
import { Link } from 'react-router-dom';


class CategoryTree extends Component {

  categoryCliked = (item) => (event)=> {
  
    this.props.dispatch(closeTaskSettings());
    this.props.dispatch(clickCategory(item.categoryId, 
      item.parentCategoryId
    ));
  }

  createChildCategory = (item) => {

  	return (
  		<ul key={ item.categoryId }>
				<li
          className={ 
            item.clicked 
            ? "categoryChildClickedItem" 
            : "categoryChildItem" 
          }
          key={ item.categoryId } 
          onClick={ this.categoryCliked(item) }
        >
          <h3 className="categoryTitle">
            { item.categoryName }
          </h3>
					<RenameCategoryButton 
            categoryId={ item.categoryId } 
            parentCategoryId={ item.parentCategoryId } 
          />
					<DeleteCategoryButton 
            categoryId={ item.categoryId } 
            parentCategoryId={ item.parentCategoryId } 
          />
				</li>  
			</ul>	
    );
  }

	createCategory = (item) => {

		let childCategoryList;
		if (item.child.length > 0) {
			childCategoryList = item.child.map(this.createChildCategory)
		}

		return (
      <ul key={item.categoryId}>
  			<li 
          className={ 
            item.clicked 
            ? "categoryParentClickedItem" 
            : "categoryParentItem" 
          }
          key={ item.categoryId } 
          onClick={ this.categoryCliked(item) }
        >
          <h3 className="categoryTitle">
            <Link to={`/category/${item.categoryName}`}>
              { item.categoryName }
            </Link>
          </h3>
  				<RenameCategoryButton 
            categoryId={ item.categoryId } 
            parentCategoryId={ item.parentCategoryId } 
          />
  				<DeleteCategoryButton 
            categoryId={ item.categoryId } 
            parentCategoryId={ item.parentCategoryId } 
          />
  				{ !item.child 
            ? <div></div>
            : <AddChildrenCategoryButton categoryId={ item.categoryId } /> 
          }
  			</li> 
        { childCategoryList }
      </ul> 	
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
		categoryList: state.changeCategoryTree.present
	}
}

export default connect(mapStateToProps)(CategoryTree);