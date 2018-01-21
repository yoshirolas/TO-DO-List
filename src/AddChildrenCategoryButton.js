import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addChildrenCategory } from './actions/appActions';
import RaisedButton from 'material-ui/RaisedButton';


class AddChildrenCategoryButton extends Component {

  addChildrenCategory = (event) => {
    event.stopPropagation();
    const childrenCategoryName = prompt('Enter new category title');
    this.props.dispatch(addChildrenCategory(this.props.id, childrenCategoryName));
  }

  render() {
    const style = {
      margin: 5,
      height: 30,
      minWidth: 40,
    };

    return (
      <RaisedButton 
        label="+" 
        type='submit' 
        style={style} 
        onClick={ this.addChildrenCategory }
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    categoryList: state.changeCategoryTree
  }
}

export default connect(mapStateToProps)(AddChildrenCategoryButton);