import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import listReducer from './reducers/list';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    listReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export default store;