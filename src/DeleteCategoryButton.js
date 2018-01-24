import React, { Component } from 'react';
import { connect } from 'react-redux';
import { delCategory } from './actions/appActions';
import RaisedButton from 'material-ui/RaisedButton';


class DeleteCategoryButton extends Component {

	deleteCategory = (event) => {
    event.stopPropagation();
		this.props.dispatch(delCategory(this.props.categoryId, this.props.parentCategoryId));
	}

  render() {
  	const style = {
  		margin: 5,
  		height: 30,
  		minWidth: 40,
		};

    return (
			<RaisedButton 
				label={ <i className="material-icons">delete_forever</i> }
				type='submit' 
				style={ style } 
				onClick={ this.deleteCategory }
			/>
    );
  }
}

function mapStateToProps(state) {
	return {
		categoryList: state.changeCategoryTree
	}
}

export default connect(mapStateToProps)(DeleteCategoryButton);