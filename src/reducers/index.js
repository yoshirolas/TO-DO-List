import { combineReducers } from 'redux';
import addCategoryReducer from './addCategoryReducer';
import delCategoryReducer from './delCategoryReducer';


const appReducer = combineReducers ({
	addCategoryReducer,
	delCategoryReducer
});

export default appReducer;
