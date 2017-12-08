import React, { Component } from 'react';
import Form from "./form"

export default class App extends Component {
   

state = {
  nickname: ""
}

  render() {
    return (<div style={{textAlign:"center",marginTop:"25vh"}}>
      <div className="col-xs-12 intro">
      <h1>Welcome player</h1>
      {this.setState()}
      <h1>Choose your nickname</h1>
      </div>
       
      <Form/>
      <div className="fontf">
      <h1 style={{marginTop: "50px"}}> You are playing as {this.state.nickname}</h1>
      </div>
    </div>);
  }
}
