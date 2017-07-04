import React from 'react';
import ReactDOM from 'react-dom';

import Family from './family';
import Member from './member';

ReactDOM.render(
    <Family lastName="Barros">
        <Member name="Paulo" />
        <Member name="Rosilene" />
        <Member name="Marina" />
    </ Family>
, document.getElementById('app'));