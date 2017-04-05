import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from "redux-logger";
//import logger from 'redux-logger'

import reducer from './Reducers/authReducer'

const logger = createLogger();

export const rootReducer = createStore(combineReducers({
        reducer
        // UserReducer        
           })
           )

           const store = createStore(rootReducer, applyMiddleware(thunk, logger) );

export default store;