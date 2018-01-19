import React, { Component } from 'react';
// import '.TaskInputForm.css';

class TaskInputForm extends Component {
	constructor(props) {
		super(props);

		this.handleTaskInputChange = this.handleTaskInputChange.bind(this);
		this.addTask = this.addTask.bind(this);
	}
	
	handleTaskInputChange(event) {
		const changedTaskInput = event.target.value;
		this.props.updateTaskInput(changedTaskInput)
	}

	addTask(event) {
		event.preventDefault();
		if (this.TaskText.value !== '') {
			this.props.entries.taskId++;
			let taskListArray = this.props.entries.taskList;
			taskListArray.push({
				taskText: this.TaskText.value,
				key: this.props.entries.taskId,
				parentCategory: this.props.entries.categoryFocus,
			});

			this.setState({
				taskList: taskListArray,
				taskInputValue: ''
			});
			this.props.addNewTask(taskListArray);

		}
	}

  render() {
    return (
	   <form onSubmit={this.addTask}> 
	  	<input
	  		id={this.props.entries.categoryId}
	   		type='text'
	   		placeholder='Enter your task'
	   		value={this.props.entries.taskInputValue}
	   		onChange={this.handleTaskInputChange}
	   		ref={input => this.TaskText = input}
	    />
	  	<button type='submit'>Add</button>
	  </form>

    );
  }
};

export default TaskInputForm;
