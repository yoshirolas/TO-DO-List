import React, { Component } from 'react';
import './CategoryTree.css';

class CategoryTree extends Component {
	constructor(props) {
		super(props);
		this.createCategory = this.createCategory.bind(this);
		this.deleteCategory = this.deleteCategory.bind(this);
		this.renameCategory = this.renameCategory.bind(this);
		this.addChildCategory = this.addChildCategory.bind(this);
		this.showCategoryTasks = this.showCategoryTasks.bind(this);
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

	showCategoryTasks(key) {
		this.props.showTasks(key);
	}

	createCategory(item) {
		if (!item.child) {
			return (
				<li 
					key={item.key} 
					className="parentCategory"
					onClick={() => this.showCategoryTasks(item.key)}
				>
					{item.categoryText}
					<button 
						className="renameBtn"
						onClick={() => this.renameCategory(item.key)}>
						V
					</button>				
					<button 
						className="deleteBtn"
						onClick={() => this.deleteCategory(item.key)}>
						X
					</button>
					<button 
						className="addBtn"
						onClick={() => this.addChildCategory(item.key)}>
						+
					</button>
				</li>
			);
		} else {
			return (
				<li 
					key={item.key} 
					className="childCategory"
					onClick={() => this.showCategoryTasks(item.key)}
				>
					{item.categoryText}
					<button
						className="renameBtn"
						onClick={() => this.renameCategory(item.key)}>
						V
					</button>				
					<button 
						className="deleteBtn"
						onClick={() => this.deleteCategory(item.key)}>
						X
					</button>
				</li>
			);
		}
	}
	
  render() {
  	let listCategory = this.props.entries.map(this.createCategory);

    return (
			<ul className="listCategory">
				{listCategory}
			</ul>
    );
  }
};

export default CategoryTree;
