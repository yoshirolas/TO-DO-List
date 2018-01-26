import React, { Component } from 'react';
import './CategoryInputForm.css';
import { connect } from 'react-redux'
import { addCategory } from '../actions/appActions';
import RaisedButton from 'material-ui/RaisedButton';


class CategoryInputForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			categoryInputValue: '',
		};
	}

	addCategory = (event) => {
		event.preventDefault();
		if (this.CategoryTitle.value) {
		  this.props.dispatch(addCategory(this.CategoryTitle.value));
			
			this.setState({
				categoryInputValue: '',
			});
		}
	}

	handleCategoryInputChange = (event) => {

		this.setState({
			categoryInputValue: event.target.value,
		});
	}

  render() {
  	const style = {
  		margin: 1,
  		height: 30,
  		minWidth: 0,
		};

    return (
			<article className="categoryInput">
    		<form onSubmit={ this.addCategory }> 
		    	<input
			     	type='text'
			     	placeholder='Enter category title'
			     	value={ this.state.categoryInputValue }
			     	onChange={ this.handleCategoryInputChange }
			     	ref={ input => this.CategoryTitle = input }
		      />
		      <RaisedButton label="Add" type='submit' style={ style } />
		    </form>
  		</article>
    );
  }
}

export default connect()(CategoryInputForm);