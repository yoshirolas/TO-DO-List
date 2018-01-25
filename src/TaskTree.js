import React, { Component } from 'react';
import './TaskTree.css';
import { connect } from 'react-redux';
import { doneTask } from './actions/appActions';
import IconButton from 'material-ui/IconButton';
import ActionDescription from 'material-ui/svg-icons/action/description';


class TaskTree extends Component {

  doneTask = (item) => (event) => {
    this.props.dispatch(doneTask(item.taskId));
  }

  createTask = (item) => {
    if (item.done) {
      return (
        <li className="taskItem" key={ item.taskId } >
          <input
            className="checkedInput" 
            type="checkbox"
            checked
            onChange={ this.doneTask(item) }
          />
          <h3 className="taskTitle"> 
            { item.taskName }
          </h3>
          <IconButton>
            <ActionDescription />
          </IconButton>
        </li>   
      );
    }

    return (
      <li className="taskItem" key={ item.taskId } >
        <input 
          className="uncheckedInput" 
          type="checkbox"
          onChange={ this.doneTask(item) }
        />
        <h3 className="taskTitle"> 
          { item.taskName }
        </h3>
        <IconButton>
          <ActionDescription />
        </IconButton>
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
        if (children) {
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