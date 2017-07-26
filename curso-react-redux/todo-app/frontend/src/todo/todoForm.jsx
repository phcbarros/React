import React from 'react';

import Grid from '../templates/grid';
import IconButton from '../templates/iconButton';

export default props => (
    <div>
        <div role="form" className="todoForm">
            <Grid columns="12 6 9">
                <input type="text" id="description" className="form-control" placeholder="Digite aqui sua tarefa" />
            </Grid>
            <Grid columns="12 6 3">
                <IconButton style="primary" icon="plus"/>
            </Grid>
        </div>
    </div>
)