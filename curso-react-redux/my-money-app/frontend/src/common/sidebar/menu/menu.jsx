import React from 'react';
import MenuItem from './menuItem';
import MenuTree from './menuTree';

export default props => (
    <ul className="sidebar-menu">
        <MenuItem path="/" label="dashboard" icon="dashboard" />
        <MenuTree label="Cadastro" icon="edit">
            <MenuItem  path="billingCycles" label="Ciclo de Pagamento" icon="usd" />
        </MenuTree>
    </ul>
)