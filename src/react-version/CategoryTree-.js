import React, { Component } from 'react';
import './CategoryTree.css';

class CategoryTree extends Component {
	constructor(props) {
		super(props);

		this.state = {
			categoryList: this.props.entries,
		}

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
		let clickedCategory = this.props.entries.map(function (item) {
		  if (item.key === key) {
		  	item.clicked = true;
		  }
		  return item
	  });
		let unclickedCategory = this.props.entries.map(function (item) {
		  if (item.key !== key) {
		  	item.clicked = false;
		  }
		  return item
	  });

		this.setState({
			categoryList: clickedCategory,
		});
		this.props.showTasks(key);
	}

	createCategory(item) {
		let parentCategoryName;
		let childCategoryName;
		if (item.clicked) {
			parentCategoryName = 'parentCategoryClicked'
			childCategoryName = 'childCategoryClicked'
		} else {
			parentCategoryName = 'parentCategory'
			childCategoryName = 'childCategory'
		}
		if (!item.child) {
			return (
				<li 
					key={item.key} 
					className={parentCategoryName}
					ref={item => this.highLight = item}
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
					className={childCategoryName}
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
	
	componentWillReceiveProps(nextProps) {
    this.setState({
      categoryList: nextProps.entries,
    });
  }

  render() {
  	let listCategory = this.state.categoryList.map(this.createCategory);

    return (
			<ul className="listCategory">
				{listCategory}
			</ul>
    );
  }
};

export default CategoryTree;
