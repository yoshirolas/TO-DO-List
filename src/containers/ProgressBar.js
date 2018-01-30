import React, { Component } from 'react';
import './ProgressBar.css';
import { connect } from 'react-redux';
import LinearProgress from 'material-ui/LinearProgress';

class ProgressBar extends Component {

  render() {

    let completedCategories = 0;
    let totalCategories = 0;
    this.props.categoryList.forEach(item => {
      totalCategories ++;
      if (item.taskList) {
        let taskNotDone = item.taskList.find(item => !item.done)
        if (!taskNotDone) {
          completedCategories ++;
        }
      } else {
        completedCategories ++;
      }

      item.child.forEach(child => {
        totalCategories ++;
        if (child.taskList) {
          let taskNotDone = child.taskList.find(item => !item.done)
          if (!taskNotDone) {
            completedCategories ++;
          }
        } else {
          completedCategories ++;
        }
      });
    });

    const style = {
        height: 10,
    }

    return (
      <div className="progressBar">
        <LinearProgress 
          mode="determinate" 
          value={ completedCategories } 
          max={ totalCategories }
          style={ style }
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categoryList: state.changeCategoryTree.present,
  }
}

export default connect(mapStateToProps)(ProgressBar);