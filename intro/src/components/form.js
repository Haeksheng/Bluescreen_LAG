import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div>
                <form>
                <label>
                    
                     <input type="text" name="name" className="col-xs-12 formm" />
                     </label>
                     <div className="col-xs-12">
                    <input type="submit" value="Submit" className="button-submit"/>
                    </div>
                    </form>
            </div>
        )
    }
}
