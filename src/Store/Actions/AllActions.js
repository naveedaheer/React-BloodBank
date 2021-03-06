import { Constants } from '../Constants'
import { firebaseApp } from '../../Database/firebaseApp'
import { browserHistory } from 'react-router'


export default class AllActions {

    //LoggedIn
    static hasLoggedIn(email) {
        const action = {
            type: Constants.HAS_SIGNED_IN,
            email
        }
        return action;
    }

    static logUser(email) {
        const action = {
            type: Constants.HAS_SIGNED_IN,
            email
        }
        return action;
    }


    //Sign Up
    static userSignUp() {

        return {
            type: Constants.SIGN_UP,

        }

    }

    static userSignUpSuccess(authUserData) {
        return {
            type: Constants.SIGN_UP_SUCCESS,
            authUserData
        }

    }

    static userSignUpFailed(error) {
        return {
            type: Constants.SIGN_UP_FAILED,
            error
        }

    }


    //SignIn
    static userSignIn() {
        return {
            type: Constants.SIGN_IN,

        }

    }

    static userSignInSuccess(authUserData) {
        return {
            type: Constants.SIGN_IN_SUCCESS,
            authUserData
        }

    }

    static userSignInFailed(error) {
        return {
            type: Constants.SIGN_IN_FAILED,
            error
        }

    }

    static userLogOut() {
        const action = {
            type: Constants.LOG_OUT
        }
        return action;
    }

    static userLogOutSuccess() {
        const action = {
            type: Constants.LOG_OUT_SUCCESS
        }
        return action;
    }

    static registerDonor() {
        return {
            type: Constants.REGISTER_DONOR
        }
    }


    static registerDonorSuccess(RegisterDonorData) {
        return {
            type: Constants.REGISTER_DONOR_SUCCESS,
            RegisterDonorData
        }
    }


    static registerDonorFailed(error) {
        return {
            type: Constants.REGISTER_DONOR,
            error
        }
    }

    static viewDonor() {
        return {
            type: Constants.VIEW_DONOR
        }
    }

    static viewDonorSuccess(donorsList) {
        return {
            type: Constants.VIEW_DONOR_SUCCESS,
            donorsList
        }
    }

    static viewDonorFailed(error) {
        return {
            type: Constants.VIEW_DONOR_FAILED,
            error
        }
    }

}