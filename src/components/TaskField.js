import React, { Component } from 'react';
// import './CategoryField.css';
import TaskTree from '../containers/TaskTree';
import TaskInputForm from '../containers/TaskInputForm';


class TaskField extends Component {
  
  render() {
    return (
      <section className="taskField" >
        <TaskInputForm /> 
        <TaskTree />
      </section>
    );
  }
}

export default TaskField;