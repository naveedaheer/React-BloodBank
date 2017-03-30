import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import SignUp from './Components/SignUp'
import SignIn from './Components/SignIn'
import { Router, hashHistory, IndexRoute, browserHistory } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
//import { store } from './store/store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {firebaseApp} from './Database/firebaseApp'

firebaseApp.auth().onAuthStateChanged(user=>{
  if(user){
    console.log("user has loggedin or signedup" , user )
  }
  else{
    console.log("user has signed out or not loggedin")
  }
})

ReactDOM.render(
  <MuiThemeProvider>
  <BrowserRouter browserHistory={browserHistory} >
  <div>
    <Route path="/signup" component={SignUp} ></Route>
    <Route path="/signin" component={SignIn} ></Route>
    </div>
  </BrowserRouter>
  </ MuiThemeProvider>
  ,
  document.getElementById('root')
);
