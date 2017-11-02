import '../common/template/dependencies';
import React from 'react';

import Header from '../common/header/header';
import Sidebar from '../common/sidebar/sidebar';

export default props => (
    <div className="wrapper">
        <Header />
        <Sidebar />
    </div>
)