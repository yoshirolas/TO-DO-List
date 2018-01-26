import React, { Component } from 'react';
import './TaskTree.css';
import { connect } from 'react-redux';
import { doneTask, showTaskDescription, saveTaskDescription } from '../actions/appActions';
import IconButton from 'material-ui/IconButton';
import ActionDescription from 'material-ui/svg-icons/action/description';


class TaskTree extends Component {

  doneTask = (item) => (event) => {
    this.props.dispatch(doneTask(item.taskId));
  }

  showTaskDescription = (item) => () => {
    this.props.dispatch(showTaskDescription(item.taskId));
  }

  saveTaskDescription = () => (event) => {
    console.log(this.taskDescription.value)
    event.preventDefault();
    this.props.dispatch(saveTaskDescription(this.taskDescription.value, this.props.taskDescription.taskId));
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
          <IconButton onClick={ this.showTaskDescription(item) }>
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
        <IconButton onClick={ this.showTaskDescription(item) }>
          <ActionDescription />
        </IconButton>
      </li>   
    );
  }
  
  render() {
    let clickedCategory;

    console.log(this.props.taskDescription.taskId)

    if (this.props.taskDescription.taskId) {
      console.log(this.props.taskList)
      if (!this.props.taskList.find(item => item.clicked)) {
        const children = this.props.children.find(item => item.child.find(it => it.clicked))
        if (children) {
          clickedCategory = children.child.find(item => item.clicked);
        }
      } else {
        clickedCategory = this.props.taskList.find(item => item.clicked);
      }
      console.log(clickedCategory)
      const taskItem = clickedCategory.taskList.find(
        item => item.taskId === this.props.taskDescription.taskId
      );
      console.log(taskItem)
      const taskDescription = taskItem.description;

      return (
        <div>
          <h3>
            { taskItem.taskName }
          </h3>
          <form>
            <input 
              defaultValue={ taskDescription } 
              type='text'
              ref={input => this.taskDescription = input}
            >
            </input>
            <div onClick={ this.saveTaskDescription() }>
              save
            </div>
          </form>
        </div>

      )
    }

    
    if (!this.props.taskList.find(item => item.clicked) && !this.props.taskDescription.taskId) {
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
    if (this.props.search.useFilter && !this.props.taskDescription.taskId) {
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

function mapStateToProps(state, ownProps) {
  return {
    taskList: state.changeCategoryTree,
    children: state.changeCategoryTree.filter(item => (item.child.length > 0)),
    search: state.changeSearchQuery,
    taskDescription: state.showTaskDescription,
  }
}

export default connect(mapStateToProps)(TaskTree);