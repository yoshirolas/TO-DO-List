// import { combineReducers } from 'redux';
import initialState from '../initState';


let uniqueCategoryId = 2;  

function addCategoryReducer (state = initialState, action) {
	console.log(action)
	switch (action.type) {
		case 'ADD_CATEGORY': 
			uniqueCategoryId++;
			return state.concat({
				categoryName: action.title,
				categoryId: uniqueCategoryId,
				child: null,
				clicked: false,
			});
		default:
			return state;
	}
}

export default addCategoryReducer;
