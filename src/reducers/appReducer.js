import { combineReducers } from 'redux';
import changeCategoryTree from './changeCategoryTreeReducer';
import changeTaskTreeReducer from './changeTaskTreeReducer';


const appReducer = combineReducers ({
	changeCategoryTree,
	changeTaskTreeReducer,
});

export default appReducer;
