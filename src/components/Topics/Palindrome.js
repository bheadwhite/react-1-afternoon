import React, { Component } from 'react'

class Palindrome extends Component {
    constructor(){
        super()
        this.state = {
            userInput: '',
            palindrome: '',

        }
    }

    changeHandle(val){
        this.setState({userInput: val})
    }
    palinFun(userInput){
        let forwards = userInput;
        let backwards = userInput;
        backwards = backwards.split('').reverse().join('')

        forwards === backwards? this.setState({palindrome: 'true'}): this.setState({palindrome: 'false'})
    }
    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange = {(e)=>this.changeHandle(e.target.value)}></input>
                <button className="confirmationButton" onClick = {() => this.palinFun(this.state.userInput)}>Check</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome} </span>
            </div>
        )
    }
}


export default Palindrome;