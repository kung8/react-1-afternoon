import React, { Component } from 'react';

class Sum extends Component {
    constructor(){
        super();
        this.state ={
            number1:0,
            number2:0,
            sum:null
        }
    };
    
handleNum1 (value1){
    this.setState ({
        number1:parseInt(value1,10)
    });
}

handleNum2 (value2){
    this.setState ({
        number2:parseInt(value2,10)
    });
}

addNum (number1,number2){
    // var num1 = number1;
    // var num2 = number2;
    // var sum = 0;
    // sum = num1 + num2;
    // this.setState = ({
    //     sum:sum})
        this.setState ({
            sum:number1+number2})


    }


    render() {
      return (
        <div className="puzzleBox sumPB">
            <h4>Sum</h4>
            <input className="inputLine" onChange={(e)=>{this.handleNum1(e.target.value)}}/>            
            <input className="inputLine" onChange={(e)=>{this.handleNum2(e.target.value)}}/>                        
            <button className="confirmationButton" onClick={()=>{this.addNum(this.state.number1,this.state.number2)}}>Add</button>
            <span className="resultsBox">sum:{this.state.sum}</span>
        </div>
      )
    }
  }
  
  export default Sum