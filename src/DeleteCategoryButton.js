import React, { Component } from 'react';
import { connect } from 'react-redux';
import { delCategory } from './actions';
import RaisedButton from 'material-ui/RaisedButton';


class DeleteCategoryButton extends Component {

	deleteCategory = (event) => {
		this.props.dispatch(delCategory(this.props.id));
	}

  render() {
  	const style = {
  		margin: 5,
  		height: 30,
  		minWidth: 40,
		};

    return (
			<RaisedButton 
				label="X" 
				type='submit' 
				style={style} 
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