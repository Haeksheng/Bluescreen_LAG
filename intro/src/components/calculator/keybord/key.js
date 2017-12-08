import React, { Component } from 'react'

export default class Key extends Component {
    render() {
         const {value} = this.props;
        return (
         <button className="Key col-xs-2 col-xs-offset-1">
           {value}
         </button>
        )
    }
}
Key.defaultProps= {
    value: "0"
}
