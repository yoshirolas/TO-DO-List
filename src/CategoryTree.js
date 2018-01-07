import React, { Component } from 'react';
// import InputForm from './InputForm';

class CategoryTree extends Component {
	constructor(props) {
		super(props);
		this.createCategory = this.createCategory.bind(this);
		this.deleteCategory = this.deleteCategory.bind(this);
	}

	deleteCategory(key) {
		this.props.deleted(key);
	}

	createCategory(item) {
		return (
			<li key={item.key}>
				{item.text}
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
