import React, { Component } from 'React';

import PageHeader from '../templates/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

export default class Todo extends Component {   
    constructor(props){
        super(props);
        this.state = { description: '', list: []};

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value });
    }

    handleAdd(){
        console.log(this.state.description)
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm 
                    handleAdd={this.handleAdd} 
                    handleChange={this.handleChange} 
                    description={this.state.description}/>
                <TodoList />
            </div>
        )
    }
}