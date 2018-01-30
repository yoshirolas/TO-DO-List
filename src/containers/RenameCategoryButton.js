import React, { Component } from 'react';
import { connect } from 'react-redux'
import { renameCategory } from '../actions/appActions';
import IconButton from 'material-ui/IconButton';
import ImageEdit from 'material-ui/svg-icons/image/edit';


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

		const newCategoryName = prompt(
      'Enter new category title', oldCategoryName
    );
		
    if (newCategoryName !== '' && newCategoryName) {
      this.props.dispatch(renameCategory(
      this.props.categoryId, 
      this.props.parentCategoryId,
      newCategoryName,
    ));
    }
	}

  render() {

    return (
      <IconButton onClick={this.renameCategory}>
        <ImageEdit />
      </IconButton>
    );
  }
}

function mapStateToProps(state) {
	return {
		categoryList: state.changeCategoryTree.present
	}
}

export default connect(mapStateToProps)(RenameCategoryButton);