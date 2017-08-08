import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../templates/grid';
import IconButton from '../templates/iconButton';
import { add, changeDescription, search } from './todoActions';

const ENTER = 'Enter',
    ESC = 'Escape';

class TodoForm extends Component {
    constructor(props) {
        super(props);

        this.keyHandler = this.keyHandler.bind(this);
    }

    componentWillMount(){
        this.props.search();
    }

    keyHandler(e) {
        const { add, search, description } = this.props;

        switch (e.key) {
            case ENTER:
                e.shiftKey ? search() : add(description)
                break;
            case ESC:
                this.props.handleClear();
                break;
        }
    }

    render() {
        const { add, search, description } = this.props;

        return (
            <div>
                <div role="form" className="todoForm">
                    <Grid columns="12 6 9">
                        <input type="text" id="description" className="form-control"
                            placeholder="Digite aqui sua tarefa"
                            onChange={this.props.changeDescription}
                            onKeyUp={this.keyHandler}
                            value={this.props.description} />
                    </Grid>
                    <Grid columns="12 6 3">
                        <IconButton style="primary" icon="plus"
                            onClick={() => add(description)} />
                        <IconButton style="info" icon="search"
                            onClick={() => search()} />
                        <IconButton style="danger" icon="remove"
                            onClick={this.props.handleClear} />
                    </Grid>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ description: state.todo.description });
const mapDispatchToProps = dispatch => 
    (bindActionCreators({ add, changeDescription, search }, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);