import React, { Component } from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { RegisterNewDonor } from '../Store/Actions/DatabaseActions'

class RegisterDonor extends React.Component {
    constructor() {
        super();
        this.state = {
            fullname: '',
            mobile: '',
            address: '',
            age: '',
            bloodgroup: '',
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
        let possibleGroups = []
        e.preventDefault();
        bloodgroup: this.state.bloodgroup
        let donor = {
            fullname: this.state.fullname,
            mobile: this.state.mobile,
            address: this.state.address,
            age: this.state.age,
            bloodgroup: this.state.bloodgroup,
            possibleBloodGroups: possibleGroups
        }
        console.log(donor)
        { this.props.RegisterDonorRequest(donor) }

    }

    render() {
        return (
            <div ><center>


                <h1>Register as Donor</h1>
                <form onSubmit={this.submit} >
                    <TextField
                        hintText="Full Name"
                        name="fullname"
                        value={this.state.fullname}
                        floatingLabelText="Full Name"
                        onChange={this.inputChange}
                    /><br />


                    <TextField
                        type="text"
                        hintText="Mobile"
                        name="mobile"
                        value={this.state.mobile}
                        floatingLabelText="Mobile"
                        onChange={this.inputChange}
                    /><br />

                    <TextField
                        type="text"
                        hintText="address"
                        name="address"
                        value={this.state.address}
                        floatingLabelText="Address"
                        onChange={this.inputChange}
                    /><br />
                    <TextField
                        type="text"
                        hintText="Age"
                        name="age"
                        value={this.state.age}
                        floatingLabelText="Age"
                        onChange={this.inputChange}
                    /><br />
                    <br />

                    <select
                        name="bloodgroup"
                        value={this.state.blood}
                        required
                        onChange={this.inputChange}>
                        <option>Blood Type   </option>
                        <option value="A+">A+   </option>
                        <option value="B+">B+   </option>
                        <option value="O+">O+   </option>
                        <option value="AB+">AB+</option>
                        <option value="A-">A-   </option>
                        <option value="B-">B-   </option>
                        <option value="O-">O-   </option>
                        <option value="AB-">AB-</option>
                    </select>
                    <br />
                    <br />

                    <RaisedButton type="submit" label="Register as Donor" primary={false} secondary={true} /> <br /><br />
                </form>

            </center>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        donorReducer: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        RegisterDonorRequest: (data) => {
            dispatch(RegisterNewDonor(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterDonor);
