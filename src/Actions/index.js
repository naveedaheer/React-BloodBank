import {SIGNED_IN} from '../Constants'
import {SIGN_UP} from '../Constants'

export function logUser(email){
    const action = {
        type: SIGNED_IN,
        email
    }
    return action;
}

export function userSignUp(Data){
    const action = {
        type: SIGN_UP,
        Data
    }
    return action;
}
