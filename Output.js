import React, { Component } from 'react';

export default class Output extends Component {
    
    constructor() {
        super();
        this.state = {
            value : 'welcome'
        };
    }
    
    
    render() {
        return (
            <h1>{this.state.value}</h1>
        );
    }
}