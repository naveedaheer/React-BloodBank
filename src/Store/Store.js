import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from "redux-logger";
//import logger from 'redux-logger'

//import rootReducer from './Reducers/rootReducer'
import {authReducer} from "./Reducers/authReducer"

const rootReducer = combineReducers({
    authReducer
})
const logger = createLogger();

let store = createStore(rootReducer, applyMiddleware(thunk, logger) );

export default store;