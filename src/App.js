// import React from 'react'
import React, { Component,Fragment } from 'react';
import HeaderComponent from './Component/HeaderComponent/HeaderComponent';

import {BrowserRouter as Router ,Route ,Switch , Link} from "react-router-dom";
import HomePageComponent from './Component/HomePageComponent/HomePageComponent';
import LoginComponent from './Component/AuthComponent/LoginComponent';
import RegisterComponent from './Component/AuthComponent/RegisterComponent';
 class App extends Component {
   constructor(props) {
     super(props);
     this.state = {  }
   }
   render() { 
     return ( 
       <Fragment>
         <Router>
         <header>
         <HeaderComponent/>
         </header>
         <Route path="/" exact component={HomePageComponent}></Route>

        <Route path="/login" exact component={LoginComponent}></Route>
        <Route path="/regis" component={RegisterComponent}></Route>
         </Router>
       </Fragment>
      );
   }
 }
  
 export default App;


