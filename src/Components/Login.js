import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import {connect} from 'react-redux';
import{savefield} from '../reducers/Action';

class Login extends Component {
    constructor(props){
        super(props);
    }
   handlechangetext=(e)=>{
    this.props.test(e.target.value)  
   }

  render() {
return (
      <div className="App">
       <div className="container">
      <form class="text-center  border-light p-5">
     
      <p class="h4 mb-4">Sign in</p>
      <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail" required value={this.props.state.name} onChange={this.handlechangetext} />
       <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password"  />
       <div class="d-flex justify-content-around">
       <div>
       <div class="custom-control custom-checkbox">
       <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember"/>
       <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
       </div>
       </div>
       </div>
       <a href="">Forgot password?</a>
      <Link to={`/Home`} ><button class="btn btn-info btn-block my-4" type="submit">Sign in</button></Link>
       <p>Not a member?
        <a href="">Register</a>
    </p>
    <p>or sign in with:</p>
    <a type="" class="light-blue-text mx-2">
        <i class="fab fa-facebook-f"></i>
    </a>
    <a type="" class="light-blue-text mx-2">
        <i class="fab fa-twitter"></i>
    </a>
    <a type="" class="light-blue-text mx-2">
        <i class="fab fa-linkedin-in"></i>
    </a>
    

      </form>
         
</div>
</div>
    
    );
  }
 }
 const mapStateToProps =(state) =>{
    return{
      state:state
    }
  }
  
  const mapDispatchToProps =(dispatch) =>{
    return{
     test:(name)=>dispatch(savefield(name))
    }
  }
 export default connect(mapStateToProps,mapDispatchToProps) (Login);