import React, { Component } from 'react';

export default class Button extends Component {
    render() {
        return (
            <td>
                <button>{this.props.value}</button>
            </td>
        );
    }
}