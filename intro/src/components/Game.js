import React, { Component } from 'react'
import Timer from "./Timer"

export default class Game extends Component {
 state = {
    count : 0,
   
    
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
                <h2> player {this.state.nickname} </h2>
              <h1 >   You scored  {this.state.count}  </h1>                
             
                <div>
               
                
                 TADY BUDE SYSTEM KTEREJ BUDE VYHODNOCOVAT 3  POLOŽKY , NEJVETSI Z NICH NAPISE NAHORE JAKO NA PRVNIM MISTE
                 NAPISTE TO HOŠI , DÍKY
                
                  
                  
                 

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
