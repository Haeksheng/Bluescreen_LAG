import React, { Component } from 'react'
import ReactCountdownClock from "react-countdown-clock"
import $ from "jquery"
import Axios from "axios"
export default class Timer extends Component {
    
    state = {
        lefts : 20
    }
    
    render() {
        return (
            <div>
               <div className="timer-style ">
                <ReactCountdownClock seconds={8}
                     color="#a30303"
                     alpha={0.7}
                     size={150}
                     paused={window.unpaus}
                     
                     
                     onComplete={ () => {
                        //$(".highscore").show(200); 
                      //  $("#dvanactHodin").hide(0);} 
                        axios.post('localhost:2500', {
                            nickname: {window:playerNick},
                            score: {window:count}
                          })
                          .then(function (response) {
                            console.log(response);
                          })
                          .catch(function (error) {
                            console.log(error);
                          });
                
                        } 
                      
                    }/>
                      
           </div>
           
           </div>

        )
    }
}
ReactCountdownClock.defaultProps = {
    paused: true
}