import React, { Component } from 'react';
// import InputForm from './InputForm';

class CategoryTree extends Component {
	constructor(props) {
		super(props);
		this.createCategory = this.createCategory.bind(this);
		this.deleteCategory = this.deleteCategory.bind(this);
		this.renameCategory = this.renameCategory.bind(this);
	}

	deleteCategory(key) {
		this.props.deleted(key);
	}

	renameCategory(key) {
		let newCategoryTitle = prompt('Enter new category title');
		this.props.rename(key,newCategoryTitle);
	}

	createCategory(item) {
		return (
			<li key={item.key}>
				{item.text}
				<button onClick={() => this.renameCategory(item.key)}>
					V
				</button>				
				<button onClick={() => this.deleteCategory(item.key)}>
					X
				</button>
			</li>
		);
	}
	
  render() {
  	// console.log(this.props.entries);
  	let listCategory = this.props.entries.map(this.createCategory);
    return (
			<ul>
				{listCategory}
			</ul>
    );
  }
};

export default CategoryTree;
