import { createStore, combineReducers } from 'redux'
// import logger from 'redux-logger'
import reducer from './Reducers/authReducer'

export const rootReducer = createStore(combineReducers({
        reducer
        // UserReducer        
           })
           )

export let store = rootReducer;