import {firebaseApp, ref} from '../../Database/firebaseApp'
import {Constants} from '../Constants'


const INITIAL_STATE = {
    hasError: false,
    errorMessage: {},
    hasLoggedIn: false,
    hasRegistered: false,
}

export default (state=INITIAL_STATE, action) =>{
    console.log("action in reducer", action)

    switch(action.type){

        case Constants.HAS_SIGNED_IN:
        const {email} = action;
        return user = {
            email,
        }

        case Constants.SIGN_UP:
       return Object.assign({}, state, {user: action.data}, {})

        case Constants.SIGN_UP_SUCCESS:
       return Object.assign({}, state, {user: action.data})

        case Constants.SIGN_UP_FAILED:
       return Object.assign({}, state, {user: action.data})

         case Constants.SIGN_IN:
        return Object.assign({}, state, {isError:true, errorMessage:{error}})

        case Constants.SIGN_IN_SUCCESS:
       return Object.assign({}, state, {user: action.data})

        case Constants.SIGN_IN_FAILED:
       return Object.assign({}, state, {user: action.data})

        case Constants.LOG_OUT:
       return Object.assign({}, state, {user: action.data})

        case Constants.LOG_OUT_SUCCESS:
       return Object.assign({}, state, {user: action.data})


        default:
        return state
    }
}
