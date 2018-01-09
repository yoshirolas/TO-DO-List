import React, { Component } from 'react';
import './TaskTree.css';

class TaskTree extends Component {
	constructor(props) {
		super(props);
		this.createTask = this.createTask.bind(this);
	}

	createTask(item) {
		// console.log(item);
		return (
			<li key={item.key} className="taskItem">
				{item.taskText}
			</li>
		);
	}
	
  render() {
  	console.log(this.props.entries);
  	console.log(this.props.entries.taskItem);

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
