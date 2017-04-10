import AllActions from './AllActions'
import {firebaseApp} from '../../Database/firebaseApp'
import {browserHistory} from 'react-router'

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
export function RegisterNewDonor(RegisterDonorData){
    console.log("RegisterDonor(RegisterDonorData)", RegisterDonorData)
    return (dispatch) => {
        dispatch(AllActions.registerDonor());
        firebaseApp.database().ref('donors').push(RegisterDonorData)
        .then((data)=>{
            console.log("Donor Added Successfully")
            dispatch(AllActions.registerDonorSuccess(data));
            browserHistory.replace('/home/donorList');
        })
        .catch((error)=>{
            console.log("Error to register Donor", error)
            dispatch(AllActions.registerDonorFailed(error))
        })
    }
}
export function LoginUser(LogInData){
        console.log("LoginUser(LogInData)", LogInData)
        return (dispatch) =>{
            dispatch(AllActions.userSignIn());
            firebaseApp.auth().signInWithEmailAndPassword(LogInData.email, LogInData.password)
            .then((data)=>{
                return firebaseApp.database().ref('/userInfo'+data.uid).once('value', snapshot=>{
                    let userData = snapshot.val();
                    console.log("userData", userData);
                    dispatch(AllActions.userSignInSuccess(userData))
                    browserHistory.replace('/home')
                })

            })
            .catch((error)=>{
                console.log("login error", error)
                dispatch(AllActions.userSignInFailed(error))
            })
        }
}


export function ViewDonorsList(bloodGroup){
    console.log("ViewDonorsList(bloodGroup)", bloodGroup)
    return (dispatch)=>{
        dispatch(AllActions.viewDonor());
        let ref = firebaseApp.database().ref().child('/donors');
          ref.orderByChild('bloodgroup').equalTo(bloodGroup).once('value', function (snapshot) {
              let donorList = [];
            snapshot.forEach(childSnapshot => {
                donorList.push(childSnapshot.val())
            })
            console.log("donorsList", donorList)
            dispatch(AllActions.viewDonorSuccess(donorList))
        })
        // .catch((error)=>{
        //     console.log("error in getting DonorsList", error)
        // })
    }
}