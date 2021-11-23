import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "./reducers/index";
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from 'redux-thunk';

//const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const initialState = {};
const middleware = [thunk]

const store = createStore(rootReducers, initialState,  composeWithDevTools(applyMiddleware(...middleware)));

export default store;