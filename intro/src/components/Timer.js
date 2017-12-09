import React, { Component } from 'react'
import ReactCountdownClock from "react-countdown-clock"
import $ from "jquery"

export default class Timer extends Component {
    
    state = {
        lefts : 20
    }
    
    render() {
        return (
            <div>
               <div className="timer-style ">
                <ReactCountdownClock seconds={5}
                     color="#a30303"
                     alpha={0.7}
                     size={150}
                     paused={window.unpaus}
                     
                     
                     onComplete={ () => {
                        $(".highscore").show(200); 
                        $("#dvanactHodin").hide(0);} 
                
                        } 
                      
                     />
                      
           </div>
           
           </div>

        )
    }
}
ReactCountdownClock.defaultProps = {
    paused: true
}