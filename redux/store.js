import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// const composeEnhancer = __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__() || compose;

const store = createStore(rootReducer, composeWithDevTools());

export default store;