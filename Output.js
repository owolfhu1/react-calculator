import React, { Component } from 'react';

export default class Output extends Component {
    render() {
        return (
            <h2>{this.props.value}</h2>
        );
    }
}
