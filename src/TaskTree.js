import React, { Component } from 'react';
import './TaskTree.css';

class TaskTree extends Component {
	constructor(props) {
		super(props);
		this.createTask = this.createTask.bind(this);
		this.editTask = this.editTask.bind(this);
		this.doneTask = this.doneTask.bind(this);
	}

	editTask(key) {
		let newTask = prompt('Enter new task');
		this.props.edit(key, newTask);
	}

	doneTask(key) {
		this.props.done(key);
	}

	createTask(item) {
		return (
			<li key={item.key} className="taskItem">
				{item.taskText}
				<input 
					type="checkbox"
					onChange={() => this.doneTask(item.key)}
				/>
				<button 
					className="editBtn"
					onClick={() => this.editTask(item.key)}>
					V
				</button>
			</li>
		);
	}
	
  render() {
  	const categoryFocus = this.props.entries.categoryFocus;
  	const taskList = this.props.entries.taskItem;
  	const taskFilter = taskList.filter(item => item.parentCategory === categoryFocus);
  	let listTask = taskFilter.map(this.createTask);

    return (
			<ul className="listTask">
				{listTask}
			</ul>
    );
  }
};

export default TaskTree;
