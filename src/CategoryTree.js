import React, { Component } from 'react';
// import './CategoryTree.css';
import { connect } from 'react-redux'
// import { delCategory } from './actions'
import RaisedButton from 'material-ui/RaisedButton';


class CategoryTree extends Component {


	createCategory(item) {
		const style = {
  		margin: 5,
  		height: 20,
  		minWidth: 40,
		};

		return (
			<li className="categoryItem" key={ item.categoryId }>
				{ item.categoryName }
				<RaisedButton label="V" type='submit' style={style} />
				<RaisedButton label="X" type='submit' style={style} />
				<RaisedButton label="+" type='submit' style={style} />
			</li>  	
    );
	}
	
  render() {
  	console.log(this.props)
  	debugger;
  	let categoryList = this.props.map(this.createCategory);
    return (
  		<ul className="categoryList">
				{ categoryList }
			</ul> 
    );
  }
}

function mapStateToProps(state) {
	return {
		categoryList: state
	}
}

export default connect(mapStateToProps)(CategoryTree);