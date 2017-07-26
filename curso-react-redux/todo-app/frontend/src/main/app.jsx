import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react';
import Menu from '../templates/menu';
import Route from './routes';

export default props => (
    <div className='container'>
        <Menu />
        <Route />
    </div>
);