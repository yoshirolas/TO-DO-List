import React, { Component } from 'react';
import { connect } from 'react-redux';
import { delCategory, closeTaskSettings } from '../actions/appActions';
import IconButton from 'material-ui/IconButton';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';


class DeleteCategoryButton extends Component {

	deleteCategory = (event) => {
    
    event.stopPropagation();
    this.props.dispatch(closeTaskSettings());
		this.props.dispatch(delCategory(
      this.props.categoryId, 
      this.props.parentCategoryId
    ));
	}

  render() {

    return (
      <IconButton onClick={ this.deleteCategory }>
        <ActionDeleteForever />
      </IconButton>
    );
  }
}

function mapStateToProps(state) {
	return {
		categoryList: state.changeCategoryTree
	}
}

export default connect(mapStateToProps)(DeleteCategoryButton);