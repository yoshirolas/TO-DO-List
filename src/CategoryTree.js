import React, { Component } from 'react';

class CategoryTree extends Component {
	constructor(props) {
		super(props);
		this.createCategory = this.createCategory.bind(this);
		this.deleteCategory = this.deleteCategory.bind(this);
		this.renameCategory = this.renameCategory.bind(this);
		this.addChildCategory = this.addChildCategory.bind(this);
	}

	deleteCategory(key) {
		this.props.deleted(key);
	}

	renameCategory(key) {
		let newCategoryTitle = prompt('Enter new category title');
		this.props.rename(key, newCategoryTitle);
	}

	addChildCategory(key) {
		let newCategoryTitle = prompt('Enter new category title');
		this.props.addChild(key, newCategoryTitle);
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
				<button onClick={() => this.addChildCategory(item.key)}>
					+
				</button>
			</li>
		);
	}
	
  render() {
  	let listCategory = this.props.entries.map(this.createCategory);

    return (
			<ul>
				{listCategory}
			</ul>
    );
  }
};

export default CategoryTree;
