import React, { Component } from 'react'
import Timer from "./Timer"

export default class Game extends Component {
 state = {
    count : 0,
    first : 60,
    second : 50,
    third : 30
    
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



unPause = (e) => {
    window.unpaus=false

}
           
        
    


changeState = (e) => {
    this.setState({count: this.state.count +1});
    this.getClassName();
    this.unPause()
}
    render() {
        return (
            <div>
             <div className="highscore" id="high">
              <h2>   End of game   </h2>
               <p> player {window.player}</p> 
              <h1 > <strong>  You scored  {this.state.count} </strong> </h1>                
             
                <div>
               <h1>First place {this.state.first}  </h1>
               <h1>Second place{this.state.second} </h1>
               <h1>Third place {this.state.third} </h1> 

                </div>

            
            
            
            
            </div>
             
             <div id="dvanactHodin">
               
               <h1>Count : {this.state.count}</h1> 
                <button className="btn-danger" style={{fontSize:"50px",} } id="changeMe"  onClick={this.changeState}>click on me </button>
           <Timer/> 
            </div>
            
            
            
            </div>
        
            
    
    
    )
    }
}
