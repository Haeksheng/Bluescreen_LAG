import React, { Component } from 'react'
import Display from './display'
import Keybord from './keybord'

export default class Calculator extends Component {
    render() {
        return (
            <div className="calculator col-xs-6  col-xs-offset-3">
                <Display/>
                <Keybord/>
            </div>
        )
    }
}
