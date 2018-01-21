import React, { Component } from 'react';
// import './CategoryField.css';
import TaskTree from './TaskTree';
import TaskInputForm from './TaskInputForm';


class TaskField extends Component {
  
  render() {
    return (
      <section>
        <TaskInputForm /> 
        <TaskTree />
      </section>
    );
  }
}

export default TaskField;