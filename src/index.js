import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import Login from './Components/SignIn';
import RegisterDonor from './Components/RegisterDonor';
import DonorList from './Components/DonorList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderOuter from "./Components/HeaderOuter"
import HeaderInner from "./Components/HeaderInner"
import {firebaseApp} from './Database/firebaseApp'
import store from './Store/Store'
import AllActions from './Store/Actions/AllActions'
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <firebaseApp />
            <Router history={browserHistory}>
                
                <Route path="/" component={HeaderOuter}>
                <Route path="/login" component={Login}></Route>
                <Route path="/signup" component={SignUp}></Route>
                    <Route path="/app" component={App} />
                    <IndexRoute component={Login}> </IndexRoute>
                </Route>
                
                <Route path="/home" component={HeaderInner}>
                <IndexRoute component={Home}> </IndexRoute>
                <Route path="registerDonor" component={RegisterDonor}></Route>
                <Route path="donorList" component={DonorList}></Route>
                
                </Route>
            </Router>
        </Provider>
    </MuiThemeProvider>
  ,
  document.getElementById('root')
);

firebaseApp.auth().onAuthStateChanged(user=>{
  if(user){
    console.log("user has loggedin or signedup" , user )
    const {email} = user;
    store.dispatch(AllActions.hasLoggedIn(email));
    browserHistory.push('/home'); 
  }
  else{
    console.log("user has signed out or not loggedin")
    browserHistory.replace('/login')
  }
})