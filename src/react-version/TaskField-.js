import React, { Component } from 'react';
import TaskTree from './TaskTree';
import TaskInputForm from './TaskInputForm';
// import '.TaskField.css';

class TaskField extends Component {
	constructor(props) {
		super(props);

		this.editTask = this.editTask.bind(this);
		this.doneTask = this.doneTask.bind(this);
		this.transitUpdatedTaskInput = this.transitUpdatedTaskInput.bind(this);
		this.transitNewTaskToState = this.transitNewTaskToState.bind(this);
	}

	editTask(key, newTaskTitle) {
  	if (newTaskTitle !== '' && newTaskTitle) {
	  	const editedTaskList = this.props.entries.taskList.map(function (item) {
		  	if (item.key === key) {
		  			item.taskText = newTaskTitle;
		  	}
		  	return item;
	  	});

	  	this.props.editTaskList(editedTaskList);
  	}
  }

	doneTask(key) {
		const completedTaskList = this.props.entries.taskList.map(function (item) {
	  	if (item.key === key) {
	  		item.done = !item.done;
	  	}
	  	return item;
  	});

		this.props.doneTaskList(completedTaskList);
  }

  transitUpdatedTaskInput(changedTaskInput) {
  	this.props.updateTaskInput(changedTaskInput);
  }

  transitNewTaskToState(newTaskList) {
  	this.props.addNewTask(newTaskList);
  }
	
  render() {
    return (
    	<div>
	    	<TaskInputForm 
	    		entries={this.props.entries}
	    		addNewTask={this.transitNewTaskToState}
	    		updateTaskInput={this.transitUpdatedTaskInput}
	    	/>
	    	<TaskTree
	    		entries={this.props.entries} 
			    done={this.doneTask}
			    edit={this.editTask}
	    	/>
	    </div>
    );
  }
};

export default TaskField;