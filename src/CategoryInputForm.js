import React, { Component } from 'react';
// import './CategoryInputForm.css';
import { connect } from 'react-redux'
import { addCategory } from './actions'


class CategoryInputForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categoryInputValue: '',
		};
	}

	addCategory = (event) => {
		event.preventDefault();
		this.props.dispatch(addCategory(this.CategoryTitle.value));
		console.log(this.CategoryTitle.value);
		this.setState({
			categoryInputValue: '',
		});
	}

	handleCategoryInputChange = (event) => {
		this.setState({
			categoryInputValue: event.target.value,
		});
	}

  render() {
    return (
			<article className="categoryInput">
    		<form onSubmit={this.addCategory}> 
		    	<input
			     	type='text'
			     	placeholder='Enter category title'
			     	value={ this.state.categoryInputValue }
			     	onChange={ this.handleCategoryInputChange }
			     	ref={ input => this.CategoryTitle = input }
		      />
		    	<button type='submit'>Add</button>
		    </form>
  		</article>
    );
  }
}

function mapStateToProps(state) {
	return {
		categoryList: state
	}
}

export default connect(mapStateToProps)(CategoryInputForm);