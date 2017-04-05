import React, { Component } from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
//import { DBfirebase } from '../database/DBfirebase'
//import { signUp } from '../store/action/auth'
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import {firebaseApp, ref} from '../Database/firebaseApp'
import { RegisterUser} from '../Store/Actions'

const mapStateToProps = (state) => { 
    return {
        signUpReducer: state
    }
}

const mapDispatchToProps = (dispatch) => { 
    return {
        signUpRequest: (data) => {
            dispatch(RegisterUser(data))
        }
    }
}

class SignupComponent extends React.Component {
    
    constructor() {
        super();
        this.state = {
            fullname: '',
            email: '',
            password: '',
            error: {
            message: ''
            }
        }
        this.submit = this.submit.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    inputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit(e) {
        e.preventDefault();
        let user = {
            fullname: this.state.fullname,
            email: this.state.email,
            password: this.state.password
        }
        // store.dispatch(logUser(email));
        console.log("user", user)
        // firebaseApp.auth().createUserWithEmailAndPassword(user.email, user.password)
        // .catch(error=>{
        //     console.log("error", error)
        //     this.setState({
        //         error
        //     })
        // })

        {this.props.signUpRequest(user), console.log("this.props.signUp(user) success") }
        
    }

    render() {
        
        return (
            <div >
                <center>
                <h1>Register</h1>
                <form onSubmit={this.submit} >
                    <TextField
                        hintText="Full Name"
                        name="fullname"
                        value={this.state.fullname}
                        floatingLabelText="Full Name"
                        onChange={this.inputChange}
                        /><br />

                    <TextField
                        type="email"
                        hintText="email"
                        name="email"
                        value={this.state.email}
                       floatingLabelText="Email"
                        onChange={this.inputChange}
                        /><br />

                    <TextField
                        type="password"
                        hintText="Password"
                        name="password"
                        value={this.state.password}
                        floatingLabelText="Password"
                        onChange={this.inputChange}
                        /><br /><br />
                    <RaisedButton type="submit" label="Register" primary={true} /> <br /><br />
                </form>
                <div>
                    {this.state.error.message}
                    <Link to="/signin" > SignIn </Link>
                </div>
                </center>
            </div>
        )
    }
}

//export default SignupComponent

export default connect(mapStateToProps, mapDispatchToProps)(SignupComponent);