import React, { Component } from 'React';
import axios from 'axios';

import PageHeader from '../templates/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

const URL = 'http://localhost:3003/api/todos';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { description: '', list: [] };

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this);

        this.refresh();
    }

    refresh() {
        axios.get(`${URL}?sort=-createAt`)
            .then(result => this.setState({ ...this.state, description: '', list: result.data }));
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value });
    }

    handleAdd() {
        const description = this.state.description;

        axios.post(URL, { description })
            .then(() => this.refresh());
    }

    handleDelete(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(() => this.refresh());
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(() => this.refresh());
    }

    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(() => this.refresh());
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    description={this.state.description} />
                <TodoList
                    list={this.state.list}
                    handleDelete={this.handleDelete} 
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}/>
            </div>
        )
    }
}