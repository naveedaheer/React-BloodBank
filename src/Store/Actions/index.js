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
export function userSignUp(signUpData){
    const action = {
        type: Constants.SIGN_UP,
        signUpData
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
export function userSignIn(signInData){
    const action = {
        type: Constants.SIGN_IN,
        signInData
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
