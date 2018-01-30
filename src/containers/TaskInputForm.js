import React, { Component } from 'react';
import './TaskInputForm.css';
import { connect } from 'react-redux'
import { addTask } from '../actions/appActions';
import RaisedButton from 'material-ui/RaisedButton';


class TaskInputForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      taskInputValue: '',
    };
  }

  addTask = (event) => {
    event.preventDefault();
    if (this.taskTitle.value) {
      this.props.dispatch(addTask(this.taskTitle.value));
      
      this.setState({
        taskInputValue: '',
      });
    }
  }

  handleTaskInputChange = (event) => {

    this.setState({
      taskInputValue: event.target.value,
    });
  }

  render() {

    const style = {
      margin: 1,
      height: 30,
      minWidth: 0,
    };

    if (
      !this.props.categoryList.find(item => item.clicked) &&
      !this.props.categoryList.find(item => item.child)
    ) {
      return (
        <article className="taskInput">
        </article>
      );
    }

    return (
      <article className="taskInput">
        <form onSubmit={this.addTask}> 
          <input
            type='text'
            placeholder='Enter task title'
            value={ this.state.taskInputValue }
            onChange={ this.handleTaskInputChange }
            ref={ input => this.taskTitle = input }
          />
          <RaisedButton label="Add" type='submit' style={style} />
        </form>
      </article>
    );
  }
}

function mapStateToProps(state) {
  return {
    categoryList: state.changeCategoryTree.present,
  }
}

export default connect(mapStateToProps)(TaskInputForm);