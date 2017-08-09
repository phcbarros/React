import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import IconButton from '../templates/iconButton';
import { markAsDone, markAsPending } from './todoActions';

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || [];
        return list.map(todo =>
            (
                <tr key={todo._id}>
                    <td className={todo.done ? 'mark-as-done' : ''}>{todo.description}</td>
                    <td>
                        <IconButton style="success" icon="check" hide={todo.done}
                            onClick={() => props.markAsDone(todo)} />
                        <IconButton style="warning" icon="undo" hide={!todo.done}
                            onClick={() => props.markAsPending(todo)} />
                        <IconButton style="danger" icon="trash-o" hide={!todo.done}
                            onClick={() => props.handleDelete(todo)} />
                    </td>
                </tr>
            ))
    }

    return (
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({ list: state.todo.list });
const mapDispatchToProps = dispatch => (bindActionCreators({ markAsDone, markAsPending }, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);