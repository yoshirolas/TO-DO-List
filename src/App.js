import React, { Component } from 'react';
import './App.css';
import CategoryTree from './CategoryTree';
import TaskTree from './TaskTree';
import Search from './Search';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categoryInputValue: '',
			categoryId: 0,
			categoryFocus: 0,
			categoryItem: [
				{
					categoryText: 'CategoryTest', 
					key: 0, 
					child: null,
					clicked: false,
				}
			],

			taskId: 0,
			taskInputValue: '',
			taskItem: [
				{
					taskText: 'My first task0', 
					key: 0, 
					parentCategory:0,
					done: false,
				},
			],
		};

		this.addCategory = this.addCategory.bind(this);
		this.handleCategoryInputChange = this.handleCategoryInputChange.bind(this);
		this.deleteCategory = this.deleteCategory.bind(this);
		this.renameCategory = this.renameCategory.bind(this);
		this.addChildCategory = this.addChildCategory.bind(this);
		this.showCategoryTasks = this.showCategoryTasks.bind(this);

		this.addTask = this.addTask.bind(this);
		this.handleTaskInputChange = this.handleTaskInputChange.bind(this);
		this.editTask = this.editTask.bind(this);
		this.doneTask = this.doneTask.bind(this);

		this.showSearchedTasks = this.showSearchedTasks.bind(this);
	}

	addCategory(event) {
		event.preventDefault();
		if (this.CategoryTitle.value !== '') {
			this.state.categoryId++;
			let categoryItemArray = this.state.categoryItem;
			categoryItemArray.push({
				categoryText: this.CategoryTitle.value,
				key: this.state.categoryId,
				child: null,
			});

			this.setState({
				categoryItem: categoryItemArray,
				categoryInputValue: ''
			});
		}
	}

	deleteCategory(key) {
  	let filteredcategoryItem = this.state.categoryItem.filter(item => item.key !== key);

  	this.setState({
			categoryItem: filteredcategoryItem
		});
  }

  renameCategory(key, newCategoryTitle) {
  	if (newCategoryTitle !== '' && newCategoryTitle) {
	  	let renamedItem = this.state.categoryItem.map(function (item) {
		  	if (item.key === key) {
		  		item.categoryText = newCategoryTitle;
		  	}
		  	return item
	  	});

	  	this.setState({
	  		categoryItem: renamedItem
	  	});
  	}
  }

  addChildCategory(key, newCategoryTitle) {
  	if (newCategoryTitle !== '' && newCategoryTitle) {
			this.state.categoryId++;

			let categoryItemArray = this.state.categoryItem;
			let posInCategoryItemArray = categoryItemArray.findIndex((item) => item.key === key);
			posInCategoryItemArray += 1;
			categoryItemArray.splice(posInCategoryItemArray, 0, {
				categoryText: newCategoryTitle,
				key: this.state.categoryId,
				child: 1,
			});

			this.setState({
				categoryItem: categoryItemArray,
				categoryInputValue: ''
			});
		}
  }

  showCategoryTasks(key) {
  	console.log(this.state.categoryItem[key]);
  	this.setState({
			categoryFocus: key,
		});
  }

  addTask(event) {
		event.preventDefault();
		if (this.TaskText.value !== '') {
			this.state.taskId++;
			let taskItemArray = this.state.taskItem;
			taskItemArray.push({
				taskText: this.TaskText.value,
				key: this.state.taskId,
				parentCategory: this.state.categoryFocus,
			});

			this.setState({
				taskItem: taskItemArray,
				taskInputValue: ''
			});
		}
	}

	handleCategoryInputChange(event) {
		this.setState({categoryInputValue: event.target.value});
	}

	handleTaskInputChange(event) {
		this.setState({taskInputValue: event.target.value});
	}

	editTask(key, newTask) {
  	if (newTask !== '' && newTask) {
	  	let editTaskItem = this.state.taskItem.map(function (item) {
		  	if (item.key === key) {
		  			item.taskText = newTask;
		  	}
		  	return item
	  	});

	  	this.setState({
	  		taskItem: editTaskItem
	  	});
  	}
  }

  doneTask(key) {
		let doneTaskItem = this.state.taskItem.map(function (item) {
	  	if (item.key === key) {
	  		item.done = !item.done;
	  	}
	  	return item
  	});

  	this.setState({
  		taskItem: doneTaskItem
  	});
  }

  showSearchedTasks(items) {
  	this.setState({
  		taskItem: items,
  	});
  }

  render() {
    return (
    	<main>
    		<Search 
    			entries={this.state.taskItem}
    			showSearchResult={this.showSearchedTasks}
    			categoryFocus={this.state.categoryFocus}
    		/>
	    	<section className="renderingInputForm">
	    		<article className="categoryInput">
		    		<form onSubmit={this.addCategory}> 
				    	<input
				    		id={this.state.categoryId}
				     		type='text'
				     		placeholder='Enter category title'
				     		value={this.state.categoryInputValue}
				     		onChange={this.handleCategoryInputChange}
				     		ref={input => this.CategoryTitle = input}
				      />
				    	<button type='submit'>Add</button>
				    </form>
	    		</article>
	    		<article className="tasksInput">
		    		<form onSubmit={this.addTask}> 
				    	<input
				    		id={this.state.categoryId}
				     		type='text'
				     		placeholder='Enter your task'
				     		value={this.state.taskInputValue}
				     		onChange={this.handleTaskInputChange}
				     		ref={input => this.TaskText = input}
				      />
				    	<button type='submit'>Add</button>
				    </form>
	    		</article>
	    	</section>
		    <section className="renderingTree">
		    	<article className="categoryTree">
		    		<CategoryTree 
			    		entries={this.state.categoryItem} 
			    		deleted={this.deleteCategory}
			    		rename={this.renameCategory}
			    		addChild={this.addChildCategory}
			    		showTasks={this.showCategoryTasks}
			    	/>
		    	</article>
		    	<article className="taskTree">
		    		<TaskTree 
			    		entries={this.state} 
			    		done={this.doneTask}
			    		edit={this.editTask}
			    	/>
		    	</article>
		    </section>
		  </main>
    );
  }
}

export default App;

