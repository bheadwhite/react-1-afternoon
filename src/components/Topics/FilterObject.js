import React, { Component } from 'react'

class FilterObject extends Component {
    constructor(){
        super()
        this.state = { 
            employees: [
                {
                  name: 'Jimmy Joe',
                  title: 'Hack0r',
                  age: 12,
                },
                {
                  name: 'Jeremy Schrader',
                  age: 24,
                  hairColor: 'brown'
                },
                {
                  name: 'Carly Armstrong',
                  title: 'CEO',
                }
              ],
            userInput: '',
            filteredEmployees: [],

        }
    }
    handleChange(val){
        this.setState({userInput: val})
    }
    filterEmployees(prop){
        let bing = this.state.employees.filter(item => item[prop])
        this.setState({filteredEmployees: bing})
    }

    render(){
        return (

            <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span className="puzzletext">Original: {JSON.stringify(this.state.employees, null, 10)}</span>
            <input className="inputLine" onChange={ (e) => {this.handleChange(e.target.value)}}></input>
            <button className="confirmationButton" onClick= {()=> this.filterEmployees(this.state.userInput)}> Filter </button>
            <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredEmployees, null, 10)}</span>
            </div>
        )
    }
}

export default FilterObject;