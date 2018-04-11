import React, { Component } from 'react'

class FilterString extends Component {
    render(){
        return (
            <div className="puzzleBox filterStringPB">
            <span className="puzzleText"></span>
                <input className="inputLine"></input>
                <button className="confirmationButton"></button>
                <span className="resultsBox filterStringRB"></span>
            </div>
        )
    }
}

export default FilterString;