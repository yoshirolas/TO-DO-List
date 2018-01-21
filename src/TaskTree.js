import React, { Component } from 'react';
// import './CategoryTree.css';
import { connect } from 'react-redux';
import RenameCategoryButton from './RenameCategoryButton';
import DeleteCategoryButton from './DeleteCategoryButton';
import { doneTask, showTaskList } from './actions/appActions';


class TaskTree extends Component {

  doneTask = (item) => (event) => {
    this.props.dispatch(doneTask(item.taskId));
    this.props.dispatch(showTaskList());
  }

  createTask = (item) => {
    if (item.done) {
      return (
        <li className="taskItem" key={ item.taskId } >
        { item.taskName }
          <input
            className="checkedInput" 
            type="checkbox"
            checked
            onChange={this.doneTask(item)}
          />
          <button className="editBtn">
            V
          </button>
        </li>   
      );
    }

    return (
      <li className="taskItem" key={ item.taskId } >
      { item.taskName }
        <input 
          className="uncheckedInput" 
          type="checkbox"
          onChange={this.doneTask(item)}
        />
        <button className="editBtn">
          V
        </button>
      </li>   
    );
  }
  
  render() {
    if (!this.props.taskList.find(item => item.clicked)) {
      return ( 
        <ul>
        </ul> 
      );
    }
    let clickedCategory = this.props.taskList.find(item => item.clicked);
    let taskList = clickedCategory.taskList.map(this.createTask);
    return (
      <ul className="taskList">
        { taskList }
      </ul> 
    );
  }
}

function mapStateToProps(state) {
  return {
    taskList: state.changeCategoryTree
  }
}

export default connect(mapStateToProps)(TaskTree);