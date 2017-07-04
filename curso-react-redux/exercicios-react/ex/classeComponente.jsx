import React, { Component } from 'react';

export default class ClasseComponente extends Component {
    constructor(props) {
        super(props);
        this.state = { value: props.initialValue };
    }
    
    sum(delta) {
        this.setState({ value: this.state.value + delta });
    }

    render() {
        return (
            <div>
                <h1>{ this.props.label }</h1>
                <h2>{ this.state.value }</h2>
                <button type="button" onClick={ () => this.sum(-1)}>Desc</button>
                <button type="button" onClick={ () => this.sum(1)}>Asc</button>
            </div>
        )
    }
}