import React, { Component } from 'react'
import $ from "jquery"
export default class Form extends Component {
   
    plsWork = () => {
     $(".button-submit").click(function(){
            $(".intro-game").hide(0);
            $(".game-content").show(200);
        });
    }  
 
   
    render() {
        return (
            <div>
                <form>
                <label>
                    
                     <input type="text" name="name" className="col-xs-12 formm" onChange={this.props.changer}/>
                     </label>
                     <div className="col-xs-12">
                    
                    </div>
                    </form>
                    <button className="button-submit" onClick={this.plsWork}>Play the game</button>
            </div>
        )
    }
}
