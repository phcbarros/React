import React from 'react';
import ReactDOM from 'react-dom';

import ClasseComponente from './classeComponente';

ReactDOM.render(
    <ClasseComponente label="Contador" initialValue={10} />
, document.getElementById('app'));