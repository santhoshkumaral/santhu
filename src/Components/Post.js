import React, { Component } from 'react';
import axios from 'axios';

import '../App.css';


class Post extends Component {
   constructor(props){
     super(props);
     let userdetail=this;
     axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')
     .then(function (res) {
      userdetail.setState({data:res.data});
      console.log(res.data);
    });
    this.state={data:[]}
   }
  
  render() {
return (
      <div className="App">
    
     <div className="container">
     <h1 align="left">Users post</h1>
     <ul>
      {this.state.data.map((info,index)=><li align="left">{info.title}</li>)}
      </ul>
<h1>Posts and comments</h1>
<ul align="left">
{this.state.data.map((cmt,index)=><span><li  >{cmt.title}</li><span><font color="red">comments :</font></span><li style={{listStyle:'none',border:'1px solid black'}}>{cmt.body}</li></span>)}
  </ul>

      </div>
</div>
    
    );
  }
 }
export default Post;