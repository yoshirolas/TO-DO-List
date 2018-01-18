import React, { Component } from 'react';
// import './CategoryField.css';
import CategoryTree from './CategoryTree';
import CategoryInputForm from './CategoryInputForm';


class CategoryField extends Component {
	
  render() {
    return (
    	<section>
    		<CategoryInputForm />	
    		<CategoryTree />
    	</section>
    );
  }
}

export default CategoryField;