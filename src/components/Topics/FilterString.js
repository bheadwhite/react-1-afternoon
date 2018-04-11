import React, { Component } from 'react'

class FilterString extends Component {
    constructor(){
        super()
        this.state ={
            names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filterNames: [],
        }
    }
    changeHandler(val){
        this.setState({userInput: val})
    }
    filterNames(userInput){
        let names = this.state.names;
        let newNames = names.filter(item => item.includes(userInput))
        this.setState({filterNames: newNames})
    }
    render(){
        return (
            <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className="puzzleText">Names: { JSON.stringify(this.state.names, null, 10)}</span>
                <input className="inputLine" onChange = { (e) => this.changeHandler(e.target.value)}></input>
                <button className="confirmationButton" onClick = { () => this.filterNames(this.state.userInput)}> Filter </button>
                <span className="resultsBox filterStringRB">Filtered Names: {JSON.stringify(this.state.filterNames, null, 10)}</span>
            </div>
        )
    }
}

export default FilterString;