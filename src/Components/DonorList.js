import * as firebase from 'firebase';
import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux'
import { ViewDonorsList } from '../Store/Actions/DatabaseActions'


const style = {
    //height: 100,
    //width: 100,
    margin: 20,
    textAlign: 'center',
    // display: 'inline-block',
    display: 'block-inline',
    height: 'auto',
    width: 'auto',
    padding: 20,
    backgroundColor: "#EF9A9A"

};

const table = {
    height: 190,
    width: 280,
    margin: 20,
    padding: 20,
    textAlign: 'center',
    display: 'inline-block',
    background: 'wheat',
    color: '#009999'
};

var donorsAvailable

class DonorList extends Component {
    constructor() {
        super();
        this.state = {
            donors: []
        }
        this.onSearch = this.onSearch.bind(this)
     }



    onSearch(e) {
        { this.props.findDonor(this.refs.selectedBlood.value) }
    }

    componentDidMount() {

        setTimeout(() => {
            this.props.findDonor('O+');
            this.state.donors = this.props.donorslist
            donorsAvailable = this.props.donorslist
        }, 10);
    }

    render() {

        return (
            <div >
                <h1>Donor List</h1>
                <center>
                    <form onSubmit={this.onSearch}>
                        <select
                            onChange={this.onSearch}
                            name="bloodgroup"
                            required
                            ref="selectedBlood"
                            defaultValue="O+"
                        >
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

                    </form>
                    <br />
                    <br />

                </ center>

                {
                    this.props.donorReducer.donor.map((m, i) => {
                        return (
                            <div>

                                <Paper key={i} style={style} zDepth={5} >
                                    >Blood: {m.bloodgroup}<br />
                                    >Mobile: {m.mobile}<br />
                                    >Name: {m.fullname}<br />
                                    >Age: {m.age}<br />
                                    >Address: {m.address}<br />
                                </Paper>
                            </div>
                        )
                    })
                }

            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        donorReducer: state.donorReducer,
        donorslist: state.donorReducer.donor,
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        findDonor: (selectedBlood) => {
            console.log("selectedBlood", selectedBlood)
            dispatch(ViewDonorsList(selectedBlood))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DonorList);