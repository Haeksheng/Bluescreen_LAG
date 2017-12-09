import React, { Component } from 'react'
import Timer from "./Timer"
import Axios from "axios"
export default class Game extends Component {
 state = {
    count : 0,
   first: 35,
   second: 15,
   third: 5
    
 }
getClassName = () => {
if (this.state.count %= 2) {document.getElementById("changeMe").classList.add('lol');
document.getElementById("changeMe").classList.remove("lol6");       
}
  else {
  {document.getElementById("changeMe").classList.add('lol6');
  document.getElementById("changeMe").classList.remove("lol");   
}}
}

componentWillMount(){
    window.count=this.state.count;
  }

unPause = (e) => {
    window.unpaus=false

}

changeState = (e) => {
    this.setState({count: this.state.count +1});
    this.getClassName();
    this.unPause();
   
}
    render() {
        window.count=this.state.count;
       
        return (
            <div>
             <div className="highscore" id="high">
              <h2>End of game</h2>
                <p>player: {window.playerNick}</p>
              <h1 > <strong>  You scored: {this.state.count} </strong> </h1>                
             
                <div>
                

                {this.state.count > this.state.first && <div>You are the best! </div>}
                {this.state.count > this.state.second && <div>Great job! You've earned second place! </div>}
                {this.state.count == this.state.third && <div>Well done! You're third. </div>}
                <h2>first place: {this.state.first}</h2>  
                <h2>second place: {window.playerNick} {this.state.count} </h2>
                <h2>third place: {this.state.third}</h2>
                
                
                
                
                </div>
        
            
            
            
            
            </div>
             
             <div id="dvanactHodin">
               
               <h1>Count : {this.state.count}</h1> 
                <button className="btn-danger" style={{fontSize:"50px",} } id="changeMe"  onClick={this.changeState}>click on me </button>
           <Timer /> 
            </div>
            
            
            
            </div>
        
            
    
    
    )
    }
}
