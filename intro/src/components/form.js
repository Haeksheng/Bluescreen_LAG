import React, { Component } from 'react'
import $ from "jquery"
export default class Form extends Component {
   
   
   
   
   
    render() {
        return (
            <div>
                <form>
                <label>
                    
                     <input type="text" name="name" className="col-xs-12 formm" onChange={this.props.changer}/>
                     </label>
                     <div className="col-xs-12">
                    <input type="submit" value="Play the game" className="button-submit" onClick />
                    </div>
                    </form>
            </div>
        )
    }
}
