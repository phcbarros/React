import React from 'react';

import Grid from '../templates/grid';
import IconButton from '../templates/iconButton';

export default props => (
    <div>
        <div role="form" className="todoForm">
            <Grid columns="12 6 9">
                <input type="text" id="description" className="form-control" 
                    placeholder="Digite aqui sua tarefa"
                    onChange={props.handleChange}
                    value={props.description}/>
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