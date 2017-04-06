import {Constants} from '../Constants'
import {firebaseApp} from '../../Database/firebaseApp'


export function RegisterUser(SignUpData) {
    console.log("SignUpData", SignUpData)
    return dispatch => {
        dispatch(userSignUp());
        firebaseApp.auth().createUserWithEmailAndPassword(SignUpData.email, SignUpData.password)
            .then((data) => {
                const userRef = firebaseApp.database.ref('/users/' + data.uid);
                userRef.set({
                    uid : data.uid,
                    email: data.email,
                    name: SignUpData.fullname
                }, signUpSuccessData => {
                    dispatch(userSignUpSuccess({ uid : data.uid, email: data.email, name: SignUpData.fullname }));
                    
                });
            })
            .catch((error) => {
                console.log("Something Went Wrong, Please Try Again ", error);
                dispatch(userSignUpFailed (error));
            });
    }   
}


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

export function userLogOut(){
    const action = {
        type: Constants.LOG_OUT
    }
    return action;
}

export function userLogOutSuccess(){
    const action = {
        type: Constants.LOG_OUT_SUCCESS
    }
    return action;
}
