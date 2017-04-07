import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import {Link, browserHistory} from "react-router"
import {firebaseApp} from '../Database/firebaseApp'
import {connect} from 'react-redux'
import store from '../Store/Store'
import AllActions from '../Store/Actions/AllActions'

var styles = {
  appBar: {
   // backgroundColor: '#009688',
    backgroundColor: '#E53935',
     minHeight:50,
     //height:300
  },
  
  buttonInAppBar : {
  margin: 12,
  backgroundColor: "transparent"
},

}



class Home extends React.Component{

    SignOut(){
    firebaseApp.auth().signOut();
    browserHistory.replace('/signin');
    }
    
    render(){
        return(
            <div>
                <h1>Welcome to Home</h1>
               
               
                <RaisedButton style={styles.buttonInAppBar} onClick={this.SignOut.bind(this)} label="Logout" primary={false} />
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log("mapStateToProps State", state)
    return {userData: state}
}

export default connect(mapStateToProps,null)(Home)