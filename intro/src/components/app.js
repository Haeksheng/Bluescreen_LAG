import React, { Component } from 'react';
import Form from "./form"
import $ from "jquery"

export default class App extends Component {
   

state = {
  nickname: "",
  visibility: 'true'
}


handleChange = (e) => this.setState({nickname: e.target.value})



  render() {
    
            return (<div style={{textAlign:"center",marginTop:"25vh"}}>
      
      <div className={this.state.visibility}>
        <div className="col-xs-12 intro">
        <div className='intro-game'>
      
        
        <h1>Welcome player</h1>
        
      <h1>Choose your nickname</h1>
        
        
        </div>
        </div>
        <Form changer={this.handleChange}/>
        


        </div>
        <div className="fontf">
        <h1 style={{marginTop: "50px"}}> You are playing as {this.state.nickname}</h1>
        </div>
        
      </div>);


  }
}




