import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addChildrenCategory } from '../actions/appActions';
import IconButton from 'material-ui/IconButton';
import ContentAddBox from 'material-ui/svg-icons/content/add-box';


class AddChildrenCategoryButton extends Component {

  addChildrenCategory = (event) => {
    
    event.stopPropagation();
    const childrenCategoryName = prompt('Enter new category title');

    if (childrenCategoryName !== '' && childrenCategoryName) {
      this.props.dispatch(addChildrenCategory(
        this.props.categoryId,
        childrenCategoryName
      ));
    }
  }

  render() {

    return (
      <IconButton onClick={ this.addChildrenCategory }>
        <ContentAddBox />
      </IconButton>
    );
  }
}

function mapStateToProps(state) {
  return {
    categoryList: state.changeCategoryTree
  }
}

export default connect(mapStateToProps)(AddChildrenCategoryButton);