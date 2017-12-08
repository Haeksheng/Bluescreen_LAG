import React, { Component } from 'react'
import Timer from "./Timer"

export default class Game extends Component {
 state = {
    count : 0

 }
getClassName = () => {
if (this.state.count == 1) {document.getElementById("changeMe").classList.add('lol');
        
}
        
       

           
        
    
}

changeState = (e) => {
    this.setState({count: this.state.count +1});
    this.getClassName()
}
    render() {
        return (
            <div>
             <Timer/>   
               <h1>Count : {this.state.count}</h1> 
                <button className="btn-danger" style={{fontSize:"50px",} } id="changeMe"  onClick={this.changeState}>click on me </button>



            </div>
        )
    }
}
