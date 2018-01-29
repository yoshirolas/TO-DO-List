import React, { Component } from 'react';
import './TaskField.css';
import TaskTree from '../containers/TaskTree';
import TaskInputForm from '../containers/TaskInputForm';
import { Route } from 'react-router';


class TaskField extends Component {
  
  render() {

    return (
      <section className="taskField" >
        <TaskInputForm /> 
        <Route path='/category' component={ TaskTree } />
      </section>
    );
  }
}

export default TaskField;