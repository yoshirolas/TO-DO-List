import { createStore } from 'redux';
// import addCategoryReducer from './reducers/addCategoryReducer'
// import delCategoryReducer from './reducers/delCategoryReducer'
import appReducer from './reducers/index'


const store = createStore(appReducer);

window.store = store;

export default store;


