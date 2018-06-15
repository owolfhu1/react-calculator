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