import React, { Component } from 'react';
import { connect } from 'react-redux'
import { renameCategory } from './actions/appActions';
import RaisedButton from 'material-ui/RaisedButton';


class RenameCategoryButton extends Component {

	renameCategory = (event) => {
    event.stopPropagation();

    let parentCategoryItem;
    let childCategoryItem;
    let oldCategoryName;

    if (this.props.parentCategoryId) {
      parentCategoryItem = this.props.categoryList.find(
        item => item.categoryId === this.props.parentCategoryId
      );
      childCategoryItem = parentCategoryItem.child.find(
        item => item.categoryId === this.props.categoryId
      );
      oldCategoryName = childCategoryItem.categoryName;
    } else {
      childCategoryItem = this.props.categoryList.filter(
        item => item.categoryId === this.props.categoryId
      );
      oldCategoryName = childCategoryItem[0].categoryName;
    }

		const newCategoryName = prompt('Enter new category title', oldCategoryName);
		
    this.props.dispatch(renameCategory(
      this.props.categoryId, 
      this.props.parentCategoryId,
      newCategoryName,
    ));
	}

  render() {
  	const style = {
  		margin: 5,
  		height: 30,
  		minWidth: 40,
		};

    return (
			<RaisedButton 
				label={ <i className="material-icons">create</i> }
				type='submit' 
				style={style} 
				onClick={this.renameCategory}
			/>
    );
  }
}

function mapStateToProps(state) {
	return {
		categoryList: state.changeCategoryTree
	}
}

export default connect(mapStateToProps)(RenameCategoryButton);