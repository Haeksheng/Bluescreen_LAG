import React, { Component } from 'react'
import ReactCountdownClock from "react-countdown-clock"
export default class Timer extends Component {
    
    state = {
        lefts : 20
    }
    
    render() {
        return (
            <div>
               
                <ReactCountdownClock seconds={5}
                     color="black"
                     alpha={0.9}
                     size={50}
                     paused={false}
                     
                     
                     onComplete={ () => {
                     
                     document.write(":)");
                        
                        
                        }
                     } 
                     
                      />
           
           
           </div>

        )
    }
}
