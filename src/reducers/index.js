// import { combineReducers } from 'redux';
import initialState from '../initState';


let uniqueCategoryId = 2;  

function appReducer (state = initialState.categoryList, action) {
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

export default appReducer;
