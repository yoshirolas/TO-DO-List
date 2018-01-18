// import { combineReducers } from 'redux';
import initialState from '../initState';
let uniqueCategoryId = 0;  

function appReducer (state = initialState.categoryList, action) {
	switch (action.type) {
		case 'ADD_CATEGORY': 
			uniqueCategoryId++;
			return state.concat({
				categoryText: "newCategory",
				key: uniqueCategoryId,
				child: null,
				clicked: false,
			});
		default:
			return state;
	}
}

export default appReducer;
