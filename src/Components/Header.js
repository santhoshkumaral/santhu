

import React, { Component } from 'react';
import {NavLink,withRouter,Link} from 'react-router-dom';
import '../App.css';


class Header extends Component {
   

  render() {
return (
      <div className="App">
      
      <nav class="mb-1 navbar navbar-expand-lg navbar-dark info-color">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
    aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent-4">
    <ul class="navbar-nav ml-auto">
    <NavLink to ={'/Home'}>
      <li class="nav-item active nav-link">
        {/* <a class="nav-link" href="#"> */} HOME
          {/* <span class="sr-only">(current)</span> */}
        {/* </a> */}
      </li></NavLink>
     <NavLink to={'/Users'}><li class="nav-item nav-link"> USERS</li></NavLink> 
     <NavLink to={'/Post'}> <li class="nav-item nav-link"> POST </li></NavLink>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true"
          aria-expanded="false">
          <i class="fas fa-user"></i> Profile </a>
        <div class="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
        
          <NavLink class="dropdown-item"  to={'/'}>Log out</NavLink>
        </div>
      </li>
    </ul>
  </div>
</nav>

</div>
    
    );
  }
 }
export default Header;