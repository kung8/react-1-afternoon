import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            brothers: [
                {
                    firstName: "Kevin",
                    computer: "MacBook Pro",
                    book: "Les Mis"

                },
                {
                    firstName: "Justin",
                    computer: "Surface",
                    color: "red"
                },
                {
                    firstName: "Leck",
                    job:"Accountant",
                    color:"black"
                }
                ],
            userInput: "",
            filteredBrothers: []
        }
    }

    storedObject(value) {
        this.setState({
            userInput: value
        });
    }

    filterBrothers(prop) {
        var brothers = this.state.brothers;
        var filteredBrothers = [];

        
        for (var i = 0; i < brothers.length; i++) {
            if (brothers[i].hasOwnProperty(prop)) {
                filteredBrothers.push(brothers[i]);
            }
        }

        this.setState({
            filteredBrothers: filteredBrothers});
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object</h4>
                <span className="puzzleText">Not Filtered: {JSON.stringify(this.state.brothers, null,10)}</span>
                <input className="inputLine" onChange={(e) => this.storedObject(e.target.value)} />
                <button className="confirmationButton" onClick={() => this.filterBrothers(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredBrothers,null,10)}</span>
            </div>
        )
    }
}




//   import React, { Component } from 'react';

// export default class FilterObject extends Component {

//   constructor() {
//     super();

//     this.state = {
//       employees: [
//         {
//           name: 'Jimmy Joe',
//           title: 'Hack0r',
//           age: 12,
//         },
//         {
//           name: 'Jeremy Schrader',
//           age: 24,
//           hairColor: 'brown'
//         },
//         {
//           name: 'Carly Armstrong',
//           title: 'CEO',
//         }
//       ],

//       userInput: '',
//       filteredEmployees: []
//     }
//   }

//   handleChange(val) {
//     this.setState({ userInput: val });
//   }

//   filterEmployees(prop) {
//     var employees = this.state.employees;
//     var filteredEmployees = [];

//     for ( var i = 0; i < employees.length; i++ ) {
//       if ( employees[i].hasOwnProperty(prop) ) {
//         filteredEmployees.push(employees[i]);
//       }
//     }

//     this.setState({ filteredEmployees: filteredEmployees });
//   }

//   render() {
//     return (
//       <div className="puzzleBox filterObjectPB">
//         <h4> Filter Object </h4>
//         <span className="puzzleText"> Original: { JSON.stringify(this.state.employees, null, 10) } </span>
//         <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
//         <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userInput) }> Filter </button>
//         <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) } </span>
//       </div>
//     )
//   }
// }