import authReducer from './authReducer'
import { createStore, combineReducers } from 'redux';


const rootReducer = createStore(combineReducers({
        authReducer,
        // UserReducer        
           })
           )
export default rootReducer