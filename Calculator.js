import React, { Component } from 'react';
import Output from "./Output";
import ButtonGrid from "./ButtonGrid";

export default class Calculator extends Component {
    render() {
        return (
            <div class="calculator">
               <Output/>
                <ButtonGrid/>
            </div>
        );
    }
}


/*

h1 {
    border: black solid 1px;
    margin: 10px;
}

.calculator {
    width: 200px;
    height: 300px;
    margin: auto;
    border: black solid 2px;
    border-radius: 6px;
}

table {
    border: black solid 1px;
    margin: 10px 10px 10px 10px;
}

button {
    height: 40px;
    width: 40px;
}


 */