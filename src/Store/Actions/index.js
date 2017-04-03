import {Constants} from '../Constants'

//LoggedIn
export function hasLoggedIn(email){
    const action = {
        type: Constants.SIGNED_IN,
        email
    }
    return action;
}

//Sign Up
export function userSignUp(Data){
    const action = {
        type: Constants.SIGN_UP,
        Data
    }
    return action;
}

export function userSignUpSuccess(authUserData){
    const action = {
        type: Constants.SIGN_UP_SUCCESS,
        authUserData
    }
    return action;
}

export function userSignUpFailed(error){
    const action = {
        type: Constants.SIGN_UP_FAILED,
        error
    }
    return action;
}


//SignIn
export function userSignIn(Data){
    const action = {
        type: Constants.SIGN_IN,
        Data
    }
    return action;
}

export function userSignInSuccess(authUserData){
    const action = {
        type: Constants.SIGN_IN_SUCCESS,
        authUserData
    }
    return action;
}

export function userSignInFailed(error){
    const action = {
        type: Constants.SIGN_IN_FAILED,
        error
    }
    return action;
}
