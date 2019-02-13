import React, { Component } from 'react';
// import  './r1.jpg';
import '../App.css';



class Home extends Component {
   

  render() {
return (
      <div className="App">
     <div className="container">
     <h1>About App</h1>
     <div className="row">
       <div className="col-md-6 col-lg-3 col-xs-12">
       <img src="/images/r2.jpg"/></div>
       <div className ="col-md-6 col-lg-9 col-xs-12">
         <p align="justify">React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
       <p align="justify">Declarative views make your code more predictable and easier to debug. Build encapsulated components that manage their own state, then compose them to make complex UIs.</p><br/><br/>
       </div>
          </div>

          <div className="row">
      
       <div className ="col-md-6 col-lg-9 col-xs-12">
         <p align="justify">React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
       <p align="justify">Declarative views make your code more predictable and easier to debug. Build encapsulated components that manage their own state, then compose them to make complex UIs.</p>
       </div>
       <div className="col-md-6 col-lg-3 col-xs-12">
       <img src="/images/r2.jpg"/></div>
          </div>

     </div>
</div>
    
    );
  }
 }
export default Home;