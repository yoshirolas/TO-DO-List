import React, { Component } from 'react';
import { connect } from 'react-redux'
import { renameCategory } from './actions/appActions';
import RaisedButton from 'material-ui/RaisedButton';


class RenameCategoryButton extends Component {

	renameCategory = (event) => {
    event.stopPropagation();
		const categoryItem = this.props.categoryList.filter(
			item => item.categoryId === this.props.id
		);
		const oldCategoryName = categoryItem[0].categoryName;
		const newCategoryName = prompt('Enter new category title', oldCategoryName);
		this.props.dispatch(renameCategory(this.props.id, newCategoryName));
	}

  render() {
  	const style = {
  		margin: 5,
  		height: 40,
  		minWidth: 40,
		};

    return (
			<RaisedButton 
				label="V" 
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