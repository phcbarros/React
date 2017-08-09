import React from 'React';

import PageHeader from '../templates/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

export default props => (
    <div>
        <PageHeader name='Tarefas' small='Cadastro' />
        <TodoForm />
        <TodoList />
    </div>
)