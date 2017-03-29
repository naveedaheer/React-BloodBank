import React, { Component } from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
//import { DBfirebase } from '../database/DBfirebase'
//import { signUp } from '../store/action/auth'
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';

/*class Register extends Component {

    render() {
        return (
            <div ><center>
                <SignupComponent signUpState={this.state} _inputHandler={this.inputChange} _submit={this.submit} />
                Already have an account? <br /><br /><Link to="/login"><RaisedButton label="Login" primary={false} /></Link>
            </center>
            </div>
        );
    }
}*/

const mapStateToProps = (state) => { 
    return {
        authReducer: state
    }
}

const mapDispatchToProps = (dispatch) => { 
    return {
        signUp: (data) => {
            dispatch(signUp(data))
        }
    }
}

class SignupComponent extends React.Component {
    
    constructor() {
        super();
        this.state = {
            fullname: '',
            email: '',
            password: ''
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
        console.log("user", user)
    }
    
    render() {
        
        return (
            <div >
                <h1>Register</h1>
                <form onSubmit={this.submit} >
                    <TextField
                        hintText="Full Name"
                        name="fullname"
                        value={this.state.fullname}
                     floatingLabelText="Full Name"
                        onChange={this.inputChange}
                        /><br />

                    {/*<TextField
                        type="email"
                        hintText="email"
                        name="email"
                        value={this.props.signUpState.email}
                       floatingLabelText="Email"
                        onChange={this.props._inputHandler}
                        /><br />

                    <TextField
                        type="password"
                        hintText="Password"
                        name="password"
                        value={this.props.signUpState.password}
                        floatingLabelText="Password"
                        onChange={this.props._inputHandler}
                        /><br /><br />*/}
                    <RaisedButton type="submit" label="Register" primary={true} /> <br /><br />
                </form>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);