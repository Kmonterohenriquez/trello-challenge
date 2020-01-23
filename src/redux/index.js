import { createStore } from 'redux';
import combineReducers from  './reducer/rootReducer'

const store = createStore(combineReducers);

export default store
