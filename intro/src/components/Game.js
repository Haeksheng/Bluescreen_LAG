import React, { Component } from 'react'

export default class Game extends Component {
 state = {
    count : 0

 }
getClassName = () => {
    if (this.state.count == 3) {
        document.getElementById("changeMe").classList.add('lol');
        if (this.state.count == 8) {
            document.getElementById("changeMe").classList.add('lol');
            if (this.state.count == 15) {
                document.getElementById("changeMe").classList.add('lol');
                if (this.state.count == 19) {
                    document.getElementById("changeMe").classList.add('lol');
                    if (this.state.count == 25) {
                        document.getElementById("changeMe").classList.add('lol');
           
        
    }
}

changeState = (e) => {
    this.setState({count: this.state.count +1});
    this.getClassName()
}
    render() {
        return (
            <div>
                
                <h1>Count : {this.state.count}</h1>
                <button className="btn-danger" style={{fontSize:"50px"}} id="changeMe"  onClick={this.changeState}>click on me </button>



            </div>
        )
    }
}
