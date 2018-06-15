import React, { Component } from 'react';
import ButtonRow from "./ButtonRow";

export default class ButtonGrid extends Component {
    render() {
        return (
            <table>
                <ButtonRow values={['CE', 'C', '<-', '/']}/>
                <ButtonRow values={['7', '8', '9', '*']}/>
                <ButtonRow values={['4', '5', '6', '-']}/>
                <ButtonRow values={['1', '2', '3', '+']}/>
                <ButtonRow values={['', '0', '.', '=']}/>
            </table>
        );
    }
}