import {firebaseApp, ref} from '../Database/firebaseApp'
import {SIGNED_IN} from '../Constants'
import {SIGN_UP} from '../Constants'
import {SIGN_IN} from '../Constants'

let user = {
    email:null,
    name: null
}

export default (state=user, action) =>{
    console.log("action in reducer", action)

    switch(action.type){
        case SIGNED_IN:
        const {email} = action;
        user={
            email,
            name: "Naveed"
        }
        return user;
        
        case SIGN_UP:
       // const {email} = action;
       ref.child('/userInfo').push(action.Data)
        // user={
        //     email,
        //     name: "Naveed"
        // }
         return user;

         case SIGN_IN:
       // const {email, password} = action;
        firebaseApp.auth().signInWithEmailAndPassword(action.Data.email, action.Data.password)
        .catch(error=>{
            console.log("error", error)
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
