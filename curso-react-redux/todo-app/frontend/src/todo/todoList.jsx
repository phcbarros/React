import React from 'react';
import IconButton from '../templates/iconButton';

export default props => {

    const renderRows = () => {
        const list = props.list || [];
        return list.map(todo =>
            (
                <tr key={todo._id}>
                    <td>{todo.description}</td>
                    <td>
                        <IconButton style="danger" icon="trash-o"
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
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}