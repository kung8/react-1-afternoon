import React, { Component } from 'react';

class FilterString extends Component {
    constructor(){
        super();
        this.state = {
            unFiltered: [
                `slowly`,
                `I'm`,
                `learning`,
                `this.`,
                `trust`,
                `me`,
                `it`,
                `is`,
                `not`,
                `easy`
            ],
            userInput: "",
            filtered:[]
        };
    };

    handleArray (value){
        this.setState({
            userInput:value
        });
    } 

    filterArray (userInput){
        const unfiltered = this.state.unFiltered;
        const filtered= [];
        
        // unfiltered.filter(function(i){
        //     if(unfiltered[i]==k){
        //         filtered.push(unfiltered[i])
        //     }
        // })

        for(let i = 0; i<unfiltered.length;i++){
            // if(unfiltered[i]===k){
                if(unfiltered[i].includes(userInput)){
                filtered.push(unfiltered[i])};
        }
        this.setState({
            filtered:filtered
        });

    }
        

    
    render() {
      return (
        <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className="puzzleText">unFiltered:{JSON.stringify(this.state.unFiltered,null,10)}</span>
            <input className="inputLine" onChange={(e)=>this.handleArray(e.target.value)}/>
            <button className="confirmationButton" onClick={()=>this.filterArray(this.state.userInput)}>Filter</button>
            <span className="resultsBox filterStringRB">filtered:{JSON.stringify(this.state.filtered,null,10)} </span>         
        </div>
      )
    }  
}
  
  export default FilterString