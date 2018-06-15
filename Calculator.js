import React, { Component } from 'react';
import cal, { evaluateInfix } from 'calculator-lib';
//to use calculator lib -> npm install calculator-lib
import Output from "./Output";
import ButtonGrid from "./ButtonGrid";

export default class Calculator extends Component {

    constructor() {
        super();
        this.state = {
            output: ''
        };
    }

    click(item) {
        let output = this.state.output;
        if (item === '=')
            output = evaluateInfix(output);
        else if (item === "C")
            output = '';
        else if (item === "<-")
            output = output.substr(0, output.length -1);
        else
            output += item;
        this.setState({output: output});
    };

    render() {
        return (
            <div className="calculator">
                <Output value={this.state.output}/>
                <ButtonGrid click={this.click.bind(this)}/>
            </div>
        );
    }

}


/*

h2 {
    border: black solid 1px;
    margin: 10px;
    height: 28px;
    border-radius: 6px;
    background: white;
}
.calculator {
    width: 200px;
    height: 280px;
    margin: auto;
    border: #898989 solid 2px;
    border-radius: 6px;
    background: black;
}
table {
    margin: 10px 10px 10px 10px;
}
button {
    height: 40px;
    width: 40px;
    border-radius: 6px;
}

 */
