import React, { Component } from 'react';
import Button from "./Button";

export default class ButtonRow extends Component {
    render() {
        return (
            <tr>
                <Button click={this.props.click} value={this.props.values[0]}/>
                <Button click={this.props.click} value={this.props.values[1]}/>
                <Button click={this.props.click} value={this.props.values[2]}/>
                <Button click={this.props.click} value={this.props.values[3]}/>
            </tr>
        );
    }
}
