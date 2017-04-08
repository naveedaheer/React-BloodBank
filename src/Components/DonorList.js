import * as firebase from 'firebase';
import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux'


const style = {
  //height: 100,
  //width: 100,
  margin: 20,
  textAlign: 'center',
  // display: 'inline-block',
  display: 'block-inline',
  height: 'auto',
  width: 'auto',
  padding: 20
  
};

const table = {
  height: 190,
  width: 280,
  margin: 20,
  padding: 20,
  textAlign: 'center',
  display: 'inline-block',
   background : 'wheat',
   color : '#009999'
};
  
class DonorList extends Component {
    constructor(){
        super();
        this.state = {
            
            arr: []
        }

         this.onSearch = this.onSearch.bind(this)
    }
 

     onSearch(e) {
        let _self = this;
        e.preventDefault()
        let ref = firebase.database().ref().child('/donors');
        _self.arr = [];
       
    // ref.orderByChild(this.refs.selectedBlood.value).equalTo(true).once('value', function (snapshot) {
       //   ref.orderByChild('bloodgroup').equalTo("A+").once('value', function (snapshot) {

          ref.orderByChild('bloodgroup').equalTo(this.refs.selectedBlood.value).once('value', function (snapshot) {
 
            snapshot.forEach(childSnapshot => {

                _self.arr.push(childSnapshot.val())
            })
            _self.props.findDonor(_self.arr)
            _self.setState({
                arr: _self.props.storeReducer.user 
            })
        });
  }

    
    render() {
        return (
            <div >
                <h1>Donor List</h1>
            <center> 
               <form onSubmit={this.onSearch}>
                 <select 
                        name="bloodgroup"
                        //value={this.props.signUpState.bloodgroup}
                        required
                        ref="selectedBlood"
                       // onChange={this.props._inputHandler}
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
                    <button onClick={this.onSearch} type="submit" > Find </button>
                      </form>
                    <br />
                    <br />
      
                    </ center>           

{this.state.arr.map((m, i) => {
                    return(
                      <div>
                    
                        <Paper style={style} zDepth={5} > 
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
     console.log(state.UserReducer)
    return {
        storeReducer: state.UserReducer
    }
}
const mapDispatchToProps = (dispatch) => {
        return {
        findDonor: (data) => {
            console.log(data)
           // dispatch(FindDonors(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DonorList);