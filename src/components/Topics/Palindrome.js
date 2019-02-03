import React, { Component } from 'react';

class Palindrome extends Component {
    constructor (){
        super();
        this.state = {
            userInput:"",
            palindrome:""
        }
    
    }

    handleWord (value){
        this.setState({
            userInput:value
        }) 
    }

    palTrueOrFalse (userInput){
        const forward = userInput;
        var backward = userInput;
        backward = backward.split("");
        backward = backward.reverse();
        backward = backward.join("");
        if(forward===backward){
            this.setState({
                palindrome: "true"});   
        }
        else{this.setState({
                palindrome: "false"});
            }
        }
    

    render() {
      return (
        <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input className="inputLine" onChange={(e)=>{this.handleWord(e.target.value)}}/>
            <button className="confirmationButton" onClick={()=>this.palTrueOrFalse(this.state.userInput)}>Submit</button>
            <span className="resultsBox">palindrome: {this.state.palindrome} </span>
        </div>
      )
    }
  }
  
  export default Palindrome