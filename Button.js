import React, { Component } from 'react';

export default class Button extends Component {
    render() {
        return (
            <td>
                <button onClick={ ()=> this.props.click(this.props.value) }>{this.props.value}</button>
            </td>
        );
    }
}
