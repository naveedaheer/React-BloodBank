import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import SignUp from './Components/SignUp'
import SignIn from './Components/SignIn'
import Home from './Components/Home'
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {firebaseApp} from './Database/firebaseApp'
import {Provider} from 'react-redux'
import store from './Store/Store'
import {logUser} from './Store/Actions'

ReactDOM.render(
  <MuiThemeProvider>
     <Provider store={store}>
  <Router history={browserHistory} >
 
    <Route path="/signup" component={SignUp} ></Route>
    <Route path="/signin" component={SignIn} ></Route>
    <Route path="/home" component={Home} ></Route>
   
  </Router>
  </ Provider>
  </ MuiThemeProvider>
  ,
  document.getElementById('root')
);

// firebaseApp.auth().onAuthStateChanged(user=>{
//   if(user){
//     console.log("user has loggedin or signedup" , user )
//     const {email} = user;
//     store.dispatch(logUser(email));
//     browserHistory.push('/home');
//   }
//   else{
//     console.log("user has signed out or not loggedin")
//     browserHistory.replace('/signin')
//   }
// })