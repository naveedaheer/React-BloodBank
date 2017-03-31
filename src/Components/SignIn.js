import React, { Component } from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
//import { DBfirebase } from '../database/DBfirebase'
//import { signUp } from '../store/action/auth'
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import {firebaseApp} from '../Database/firebaseApp'

// const mapStateToProps = (state) => { 
//     return {
//         authReducer: state
//     }
// }

// const mapDispatchToProps = (dispatch) => { 
//     return {
//         signUp: (data) => {
//           //  dispatch(signUp(data))
//         }
//     }
// }

class SignInComponent extends React.Component {
    
    constructor() {
        super();
        this.state = {
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
            email: this.state.email,
            password: this.state.password
        }
        console.log("user", user)
        firebaseApp.auth().signInWithEmailAndPassword(user.email, user.password)
        console.log("signIn Success")
        
        .catch(error=>{
            console.log("error", error)
            this.setState({
                error
            })
        })
    }

    render() {
        
        return (
            <div >
                <center>
                <h1>SignIn</h1>
                <form onSubmit={this.submit} >
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
                    <RaisedButton type="submit" label="SignIn" primary={true} /> <br /><br />
                </form>
                <div>
                    {this.state.error.message}
                    <Link to="/signup" > SignUp </Link>
                </div>
                </center>
            </div>
        )
    }
}

export default SignInComponent

//export default connect(mapStateToProps, mapDispatchToProps)(SignupComponent);