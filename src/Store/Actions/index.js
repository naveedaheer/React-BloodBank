import {Constants} from '../Constants'

export function logUser(email){
    const action = {
        type: Constants.SIGNED_IN,
        email
    }
    return action;
}

export function userSignUp(Data){
    const action = {
        type: Constants.SIGN_UP,
        Data
    }
    return action;
}

export function userSignIn(Data){
    const action = {
        type: Constants.SIGN_IN,
        Data
    }
    return action;
}

export function userSignInError(Error){
    const action = {
        type: Constants.SIGN_IN_ERROR,
        Error
    }
    return action;
}