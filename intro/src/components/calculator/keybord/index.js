import React, { Component } from 'react'
import Key from './key'

export default class Keybord extends Component {
    render() {
        return (
            <div className="keyboard col-xs-11">
                <div className="row">
                <Key value="7"/>
                <Key value="8"/>
                <Key value="9"/>
                <Key value="/"/>
                <Key value="4"/>
                <Key value="5"/>
                <Key value="6"/>
                <Key value="*"/>
                <Key value="3"/>
                <Key value="2"/>
                <Key value="1"/>
                <Key value="-"/>
                <Key value="0"/>
                <Key value=","/>
                <Key value="="/>
                <Key value="+"/>
               </div>   
            </div>
        )
    }
}
