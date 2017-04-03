import {firebaseApp, ref} from '../../Database/firebaseApp'
import {Constants} from '../Constants'

let user = {
    email:null,
    name: null
}

const INITIAL_STATE = {
    // authUser: {},
    // isAuthenticated: "",
    // isProcessing: false,

    isRegistered: false,
    isError: false,
    errorMessage: {}
}

export default (state=user, action) =>{
    console.log("action in reducer", action)

    switch(action.type){
        case Constants.SIGNED_IN:
        const {email} = action;
        user={
            email,
            name: "Naveed"
        }
        return user;
        
        case Constants.SIGN_UP:
       // const {email} = action;
       ref.child('/userInfo').push(action.Data)
        // user={
        //     email,
        //     name: "Naveed"
        // }
        // return user;

        return Object.assign({}, state, {isRegistered:true})

         case Constants.SIGN_IN:
       // const {email, password} = action;
        firebaseApp.auth().signInWithEmailAndPassword(action.Data.email, action.Data.password)
        .catch(error=>{
            console.log("error", error)
            Object.assign({}, state, {isError:true, errorMessage:{error}})
        })
        // user={
        //     email,
        //     name: "Naveed"
        // }
         return user;

        default:
        return state
    }
}
