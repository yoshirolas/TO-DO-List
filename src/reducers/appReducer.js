import { combineReducers } from 'redux';
import changeCategoryTree from './changeCategoryTreeReducer';
import changeSearchQuery from './changeSearchQueryReducer';
import showTaskDescription from './showTaskDescriptionReducer';
import { routerReducer } from 'react-router-redux';


const appReducer = combineReducers ({
	changeCategoryTree,
	changeSearchQuery,
  showTaskDescription,
  routing: routerReducer,
});

export default appReducer;
