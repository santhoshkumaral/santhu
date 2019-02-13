import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Home from './Components/Home';
import Post from './Components/Post';
import Users from './Components/Users';
import Header from './Components/Header';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route,Redirect} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/Routereducers';
import Login from './Components/Login';
const store=createStore(rootReducer);

ReactDOM.render(
   
     
    <Provider store={store}>
    
    <BrowserRouter>
   
<div className="App">
<Header></Header>
 <Route exact path="/" component={Login} name="" />
    <Route path="/Home" component={Home}/>
    <Route path="/Users" component={Users}/>
    <Route path="/Post" component={Post}/>
   
   
    </div>
</BrowserRouter>
</Provider>
 , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
