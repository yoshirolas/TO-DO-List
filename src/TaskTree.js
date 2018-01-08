import React, { Component } from 'react';
// import './TaskTree.css';

class TaskTree extends Component {
	constructor(props) {
		super(props);
		this.createTask = this.createTask.bind(this);
	}

	createTask(item) {
		return (
			<li key={item.key} className="parentTask">
				{item.tasks}
			</li>
		);
	}
	
  render() {
  	console.log(this.props.entriesTask);
  	let listTask = this.props.entriesTask.map(this.createTask);

    return (
			<ul className="listTask">
				{listTask}
			</ul>
    );
  }
};

export default TaskTree;
