import React, { Component } from 'react';
import './App.css';
import CategoryTree from './CategoryTree';
import TaskField from './TaskField';
import Search from './Search';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categoryInputValue: '',
			categoryId: 0,
			categoryFocus: 0,
			categoryList: [
				{
					categoryText: 'CategoryTest', 
					key: 0, 
					child: null,
					clicked: false,
				}
			],

			taskId: 0,
			taskInputValue: '',
			taskList: [
				{
					taskText: 'My first task0', 
					key: 0, 
					parentCategory: 0,
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

		this.showSearchedTasks = this.showSearchedTasks.bind(this);
		this.showEditTaskList = this.showEditTaskList.bind(this);
		this.showCompletedTaskList = this.showCompletedTaskList.bind(this);
		this.showNewTask = this.showNewTask.bind(this);
		this.showNewTaskInput = this.showNewTaskInput.bind(this);
	}

	addCategory(event) {
		event.preventDefault();
		if (this.CategoryTitle.value !== '') {
			this.state.categoryId++;
			let categoryListArray = this.state.categoryList;
			categoryListArray.push({
				categoryText: this.CategoryTitle.value,
				key: this.state.categoryId,
				child: null,
			});

			this.setState({
				categoryList: categoryListArray,
				categoryInputValue: ''
			});
		}
	}

	deleteCategory(key) {
  	let filteredcategoryList = this.state.categoryList.filter(item => item.key !== key);

  	this.setState({
			categoryList: filteredcategoryList
		});
  }

  renameCategory(key, newCategoryTitle) {
  	if (newCategoryTitle !== '' && newCategoryTitle) {
	  	let renamedItem = this.state.categoryList.map(function (item) {
		  	if (item.key === key) {
		  		item.categoryText = newCategoryTitle;
		  	}
		  	return item
	  	});

	  	this.setState({
	  		categoryList: renamedItem
	  	});
  	}
  }

  addChildCategory(key, newCategoryTitle) {
  	if (newCategoryTitle !== '' && newCategoryTitle) {
			this.state.categoryId++;

			let categoryListArray = this.state.categoryList;
			let posIncategoryListArray = categoryListArray.findIndex((item) => item.key === key);
			posIncategoryListArray += 1;
			categoryListArray.splice(posIncategoryListArray, 0, {
				categoryText: newCategoryTitle,
				key: this.state.categoryId,
				child: 1,
			});

			this.setState({
				categoryList: categoryListArray,
				categoryInputValue: ''
			});
		}
  }

  showCategoryTasks(key) {
  	console.log(this.state.categoryList[key]);
  	this.setState({
			categoryFocus: key,
		});
  }

	handleCategoryInputChange(event) {
		this.setState({categoryInputValue: event.target.value});
	}

  showSearchedTasks(items) {
  	this.setState({
  		taskList: items,
  	});
  }

  showEditTaskList(editedTaskList) {
  	this.setState({
  		taskList: editedTaskList,
  	});
  }

  showCompletedTaskList(completedTaskList) {
  	this.setState({
  		taskList: completedTaskList,
  	});
  }

  showNewTask(newTaskList) {
  	this.setState({
  		taskList: newTaskList,
  		taskInputValue: '',
  	});
  }

  showNewTaskInput(changedTaskInput) {
  	this.setState({
  		taskInputValue: changedTaskInput,
  	});
  }

  render() {
    return (
    	<main>
    		<Search 
    			entries={this.state.taskList}
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
	    		<article className="taskField">
	    			<TaskField
	    				entries={this.state}
	    				editTaskList={this.showEditTaskList}
	    				doneTaskList={this.showCompletedTaskList}
	    				addNewTask={this.showNewTask}
	    				updateTaskInput={this.showNewTaskInput}
	    			/>
	    		</article>
	    	</section>
		    <section className="renderingTree">
		    	<article className="categoryTree">
		    		<CategoryTree 
			    		entries={this.state.categoryList} 
			    		deleted={this.deleteCategory}
			    		rename={this.renameCategory}
			    		addChild={this.addChildCategory}
			    		showTasks={this.showCategoryTasks}
			    	/>
		    	</article>
		    </section>
		  </main>
    );
  }
}

export default App;

