import React, { Component } from 'react';

export default class ClasseComponente extends Component {
    render() {
        return (
            <h1>{ this.props.value }</h1>
        )
    }
}