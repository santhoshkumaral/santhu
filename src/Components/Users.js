import React, { Component } from 'react';
import axios from 'axios';

import '../App.css';


class Users extends Component {
   constructor(props){
     super(props);
     let userdetail=this;
     axios.get('https://jsonplaceholder.typicode.com/users')
     .then(function (res) {
      userdetail.setState({data:res.data});
      console.log(res.data);
    });
    this.state={data:[]}
   }
   handleClick(){
     
   }
  render() {
return (
      <div className="App">
     <h1>Users Detail</h1><br></br>
      <table className="table">
        <th>Name </th>
        <th>User Name</th>
        <th>Email </th>
        <th>Address</th>
        <th>Lat / Lang</th>
        <tbody>
        {this.state.data.map((info,index)=><tr  onClick={this.handleClick}><td>{info.name}</td><td>{info.username}</td> <td>{info.email}</td><td><span>{info.address.city}</span>,<span>{info.address.street}</span>-<span>{info.address.zipcode}</span></td><td><span>{info.address.geo.lat},</span><span>{info.address.geo.lng}</span></td></tr>)}
        </tbody>
      </table>
</div>
    
    );
  }
 }
export default Users;