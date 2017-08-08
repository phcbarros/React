import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../templates/grid';
import IconButton from '../templates/iconButton';
import { changeDescription } from './todoActions';

const ENTER = 'Enter',
    ESC = 'Escape';

const TodoForm = props => {
    const keyHandler = (e) => {
        switch (e.key) {
            case ENTER:
                e.shiftKey ? props.handleSearch() : props.handleAdd()
                break;
            case ESC:
                props.handleClear();
                break;
        }
    }

    return (
        <div>
            <div role="form" className="todoForm">
                <Grid columns="12 6 9">
                    <input type="text" id="description" className="form-control"
                        placeholder="Digite aqui sua tarefa"
                        onChange={props.changeDescription}
                        onKeyUp={keyHandler}
                        value={props.description} />
                </Grid>
                <Grid columns="12 6 3">
                    <IconButton style="primary" icon="plus"
                        onClick={props.handleAdd} />
                    <IconButton style="info" icon="search"
                        onClick={props.handleSearch} />
                    <IconButton style="danger" icon="remove"
                        onClick={props.handleClear} />
                </Grid>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({ description: state.todo.description });
const mapDispatchToProps = dispatch => (bindActionCreators({ changeDescription }, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);