import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from "redux-logger";
//import logger from 'redux-logger'

import rootReducer from './Reducers/rootReducer'

const logger = createLogger();


let store = createStore(rootReducer, applyMiddleware(thunk, logger) );

export default store;