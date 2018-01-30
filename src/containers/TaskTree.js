import React, { Component } from 'react';
import './TaskTree.css';
import { connect } from 'react-redux';
import { 
  doneTask, 
  showTaskSettings, 
  closeTaskSettings, 
  saveTaskSettings 
} from '../actions/appActions';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import ActionDescription from 'material-ui/svg-icons/action/description';
import ContentSave from 'material-ui/svg-icons/content/save';
import NavigationClose from 'material-ui/svg-icons/navigation/close';


class TaskTree extends Component {

  doneTask = (item) => (event) => {
    this.props.dispatch(doneTask(item.taskId));
  }

  showTaskDescription = (item) => () => {
    this.props.dispatch(showTaskSettings(item.taskId));
  }

  closeTaskDescription = () => () => {
    this.props.dispatch(closeTaskSettings());
  }

  saveTaskSettings = () => (event) => {

    event.preventDefault();
    this.props.dispatch(closeTaskSettings());
    this.props.dispatch(saveTaskSettings(
      this.taskNewName.value,
      this.taskNewDescription.value, 
      this.props.taskDescription.taskId
    ));
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

    console.log(this.props.match)

    let clickedCategory;
    if (this.props.taskDescription.taskId) {
      if (!this.props.taskList.find(item => item.clicked)) {
        const children = this.props.children.find(
          item => item.child.find(
            item => item.clicked
          )
        )
        if (children) {
          clickedCategory = children.child.find(item => item.clicked);
        }
      } else {
        clickedCategory = this.props.taskList.find(item => item.clicked);
      }
      const taskItem = clickedCategory.taskList.find(
        item => item.taskId === this.props.taskDescription.taskId
      );
      const taskName = taskItem.taskName; 
      const taskDescription = taskItem.description;
      const style = {
        margin: 5,
        height: 25,
        widthMin: 100,
      }

      return (
        <div className="taskDescription">
          <form>
            <span>
              Title:
            </span>
            <input 
              className="taskNameInput"
              defaultValue={ taskName }
              ref={input => this.taskNewName = input} 
            >
            </input>
            <span>
              Description:
            </span>
            <textarea 
              className="taskDescriptionInput" 
              defaultValue={ taskDescription } 
              type='text'
              ref={input => this.taskNewDescription = input}
            >
            </textarea>
            <div className="taskDescriptionBtnContainer">
              <RaisedButton 
                onClick={ this.saveTaskSettings() } 
                style={style} 
                secondary={true}
              >
                <ContentSave />
              </RaisedButton>
              <RaisedButton 
                onClick={ this.closeTaskDescription() } 
                style={style} 
                secondary={true}
              >
                <NavigationClose />
              </RaisedButton>
            </div>
          </form>
        </div>
      )
    }
    
    if (
      !this.props.taskList.find(item => item.clicked) 
      && !this.props.taskDescription.taskId
      ) {
      if (this.props.children.length > 0) {
        const children = this.props.children.find(
          item => item.child.find(
            item => item.clicked
          )
        )
        if (children) {
          clickedCategory = children.child.find(item => item.clicked);
          clickedCategory.taskList.map(this.createTask);
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
    if (
      this.props.search.useFilter 
      && !this.props.taskDescription.taskId
    ) {
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
    taskList: state.changeCategoryTree.present,
    children: state.changeCategoryTree.present.filter(
      item => (item.child.length > 0)
    ),
    search: state.changeSearchQuery,
    taskDescription: state.showTaskDescription,
  }
}

export default connect(mapStateToProps)(TaskTree);