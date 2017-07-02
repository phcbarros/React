import React from 'react';
import ReactDOM from 'react-dom';

import Family from './family';
import Member from './member';

ReactDOM.render(
    <Family >
        <Member name="Paulo" lastName="Barros" />
        <Member name="Maria" lastName="Barros" />
    </ Family>
, document.getElementById('app'));