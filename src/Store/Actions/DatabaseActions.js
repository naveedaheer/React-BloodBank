import AllActions from './AllActions'
import {firebaseApp} from '../../Database/firebaseApp'

export function RegisterUser(SignUpData) {
    console.log("RegisterUser(SignUpData)", SignUpData)
    return (dispatch) => {
        dispatch(AllActions.userSignUp());
        firebaseApp.auth().createUserWithEmailAndPassword(SignUpData.email, SignUpData.password)
            .then((data) => {
                const userRef = firebaseApp.database().ref('userInfo');
                userRef.push({
                    uid: data.uid,
                    email: data.email,
                    name: SignUpData.fullname
                }
                
                , signUpSuccessData => {
                    dispatch(AllActions.userSignUpSuccess({ uid: data.uid, email: SignUpData.email, name: SignUpData.fullname }));
                    browserHistory.replace('/home');
        
                });
            })
            .catch((error) => {
                console.log("Something Went Wrong, Please Try Again ", error);
                dispatch(AllActions.userSignUpFailed (error));
            });
    }   
}

export function LoginUser(LogInData){
        console.log("RegisterUser(SignUpData)", SignUpData)
        return (dispatch) =>{
            dispatch(AllActions.userSignIn());
            firebaseApp.auth().signInWithEmailAndPassword(LogInData.email, LogInData.password)
            .then((data)=>{
                
            })
        }
}