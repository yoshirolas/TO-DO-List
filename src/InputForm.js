import React, { Component } from 'react';
import CategoryTree from './CategoryTree';
// import './InputForm.css';

class InputForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			items: [{text: 'CategoryTest', key: 0}],
			id: 0,
		};
		this.addCategory = this.addCategory.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.delCategory = this.delCategory.bind(this);
	}

	addCategory(event) {
		event.preventDefault();
		if (this.CategoryTitle.value !== '') {
			this.state.id++;
			// console.log(this.state.id);
			// console.log('submitted');
			// console.log('This category title is ' + this.CategoryTitle.value);

			let itemsArray = this.state.items;
			// console.log(this.CategoryTitle);
			itemsArray.push({
				text: this.CategoryTitle.value,
				key: this.state.id
			});

			this.setState({
				items: itemsArray
			});
			// this.CategoryTitle.value = "";
			this.state.value = '';
			// console.log(this.state.items);
		}
	}

	delCategory(key) {
  	let filteredItems = this.state.items.filter(function (item) {
   		return (item.key !== key);
  	});

  	this.setState({
			items: filteredItems
		});
  }

	handleInputChange(event) {
		this.setState({value: event.target.value});
	}

  render() {
    return (
      <form onSubmit={this.addCategory}> 
      	<input
      		id={this.state.id}
       		type='text'
       		placeholder='Enter category title'
       		value={this.state.value}
       		onChange={this.handleInputChange}
       		ref={(input) => this.CategoryTitle = input}
        />
      	<button type='submit'>Add</button>
      	<CategoryTree 
      		entries={this.state.items} 
      		deleted={this.delCategory}
      	/>
      </form>
    );
  }
}

export default InputForm;
