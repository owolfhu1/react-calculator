import React, { Component } from 'react';
import ButtonRow from "./ButtonRow";

export default class ButtonGrid extends Component {
    render() {
        return (
            <table>
                <ButtonRow click={this.props.click} values={['(', ')', '<-', '/']}/>
                <ButtonRow click={this.props.click} values={['7', '8', '9', '*']}/>
                <ButtonRow click={this.props.click} values={['4', '5', '6', '-']}/>
                <ButtonRow click={this.props.click} values={['1', '2', '3', '+']}/>
                <ButtonRow click={this.props.click} values={['C', '0', '.', '=']}/>
            </table>
        );
    }
}
