import React, { Component } from 'react'
import ReactCountdownClock from "react-countdown-clock"
import $ from "jquery"
import axios from "axios"
export default class Timer extends Component {
    
    state = {
        lefts : 20
    }
    
    render() {
        return (
            <div>
               <div className="timer-style ">
                <ReactCountdownClock seconds={2}
                     color="#a30303"
                     alpha={0.7}
                     size={150}
                     paused={window.unpaus}
                     
                     
                     onComplete={ () => {
                        $(".highscore").show(200); 
                        $("#dvanactHodin").hide(0);} 
                        // axios.post('http://10.10.1.11/scores/', 
                        
                        // {
                        //     // nickname: {window:playerNick},
                        //     // score: {window:count}
                        //     crossdomain: true
                        //   })
                        //   .then(function (response) {
                        //     console.log(response);
                        //   })
                        //   .catch(function (error) {
                        //     console.log(error);
                        //   });
                
                        // } 
                      
                    }/>
                      
           </div>
           
           </div>

        )
    }
}
ReactCountdownClock.defaultProps = {
    paused: true
}