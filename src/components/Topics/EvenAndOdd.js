 import React, { Component } from 'react';

 export default class EvenAndOdd extends Component {
    constructor(){
        super()
        this.state ={
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
    }
    
    collectNum(value){
        this.setState({
            userInput:value,
        });
    }

    splitNum (userInput){
        const numbers = userInput.split(',');
        const evens = [];
        const odds = [];

        //need to figure out how to turn the input from string into an array. 
        // split => takes a string and separates it into an array 
        //parseInt =>takes a string and turns it into an integer
        // stringify =>

        for(let i=0;i<numbers.length;i++){
        if(numbers[i]%2 === 0){
            evens.push(parseInt(numbers[i],10))
            }
        else{
            odds.push(parseInt(numbers[i],10))
            };
        };
        this.setState ({
            evenArray:evens,
            oddArray:odds
        })           
    }
    
    render() {
      return (
        <div className="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>
            <input className="inputLine" onChange={(e)=>this.collectNum(e.target.value)}/>
            <button className="confirmationButton" onClick={()=>{this.splitNum(this.state.userInput)}}>Split Numbers</button>
            <span className="resultsBox"> Evens: {JSON.stringify(this.state.evenArray)}</span>
            <span className="resultsBox"> Odds: {JSON.stringify(this.state.oddArray)}</span>   
        </div>
        )
    }
  }
