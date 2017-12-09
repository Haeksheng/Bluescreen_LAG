import React, { Component } from 'react';
import Form from "./form"
import $ from "jquery"
import Game from "./Game"

export default class App extends Component {
   

state = {
  nickname: ""
  
}
playerNick = () => {
  window.player = this.state.nickname;
}

handleChange = (e) =>{ this.setState({nickname: e.target.value});
                      this.playerNick();                   


}



  render() {
    
            return (<div style={{textAlign:"center",marginTop:"25vh"}}>
      
      <div className={this.state.visibility}>
        <div className="col-xs-12 intro">
        
        <div className="game-content"> 
        <Game/>

        </div>
        
        
        <div className='intro-game'>
      
        
        <h1>Welcome player</h1>
        
      <h1>Choose your nickname</h1>
        
        
        
        
        <Form changer={this.handleChange}/>
        </div>
        </div>

        </div>
        <div className="fontf">
        <h1 style={{marginTop: "50px"}}> You are playing as <p style={{color:"white",fontSize:"50px"}}>{this.state.nickname}</p></h1>
        </div>
        

        
      </div>);


  }
}




