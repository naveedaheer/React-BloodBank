import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from "redux-logger";
import { authReducer, donorReducer } from "./Reducers/reducer"

const rootReducer = combineReducers({
    authReducer,
    donorReducer
})
const logger = createLogger();

let store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;