import {Constants} from '../Constants'
import {firebaseApp} from '../../Database/firebaseApp'
import {browserHistory} from 'react-router'


export default class AllActions{

//LoggedIn
static hasLoggedIn(email){
    const action = {
        type: Constants.HAS_SIGNED_IN,
        email
    }
    return action;
}

static logUser(email){
    const action = {
        type: Constants.HAS_SIGNED_IN,
        email
    }
    return action;
}


//Sign Up
static userSignUp(){
   
    return {
        type: Constants.SIGN_UP,
        
    }
    
}

static userSignUpSuccess(authUserData){
    return {
        type: Constants.SIGN_UP_SUCCESS,
        authUserData
    }
    
}

static userSignUpFailed(error){
    return {
        type: Constants.SIGN_UP_FAILED,
        error
    }
    
}


//SignIn
static userSignIn(signInData){
    const action = {
        type: Constants.SIGN_IN,
        signInData
    }
    return action;
}

static userSignInSuccess(authUserData){
    const action = {
        type: Constants.SIGN_IN_SUCCESS,
        authUserData
    }
    return action;
}

static userSignInFailed(error){
    const action = {
        type: Constants.SIGN_IN_FAILED,
        error
    }
    return action;
}

static userLogOut(){
    const action = {
        type: Constants.LOG_OUT
    }
    return action;
}

static userLogOutSuccess(){
    const action = {
        type: Constants.LOG_OUT_SUCCESS
    }
    return action;
}

}