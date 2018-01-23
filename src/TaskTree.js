import React, { Component } from 'react';
// import './CategoryTree.css';
import { connect } from 'react-redux';
import { doneTask } from './actions/appActions';


class TaskTree extends Component {

  doneTask = (item) => (event) => {
    this.props.dispatch(doneTask(item.taskId));
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
            onChange={ this.doneTask(item) }
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
          onChange={ this.doneTask(item) }
        />
        <button className="editBtn">
          V
        </button>
      </li>   
    );
  }
  
  render() {
    console.log(this.props.search)
    let clickedCategory;
    if (!this.props.taskList.find(item => item.clicked)) {
      if (this.props.children.length > 0) {
        console.log(this.props.children)
        const children = this.props.children.find(item => item.child.find(it => it.clicked))
        clickedCategory = children.child.find(item => item.clicked);
        console.log(clickedCategory)
        const taskList = clickedCategory.taskList.map(this.createTask);
        console.log(taskList)
      } else {
        return ( 
          <ul>
          </ul> 
        );
      }
    } else {
      clickedCategory = this.props.taskList.find(item => item.clicked);
    }

    const filterTaskBySearchQuery = clickedCategory.taskList.filter(
      item => item.taskName.indexOf(this.props.search.searchQuery) !== -1
    );
    let taskList;
    if (this.props.search.useFilter) {
      let filterTaskByDone = filterTaskBySearchQuery.filter(
        item => item.done === this.props.search.searchDone
      );
      taskList = filterTaskByDone.map(this.createTask);
    } else {
      taskList = filterTaskBySearchQuery.map(this.createTask);
    }

    return (
      <ul className="taskList">
        { taskList }
      </ul> 
    );
  }
}

function mapStateToProps(state) {
  return {
    taskList: state.changeCategoryTree,
    children: state.changeCategoryTree.filter(item => (item.child.length > 0)),
    search: state.changeSearchQuery
  }
}

export default connect(mapStateToProps)(TaskTree);