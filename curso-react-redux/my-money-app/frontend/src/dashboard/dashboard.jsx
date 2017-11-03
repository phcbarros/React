import React, { Component } from 'react';

import ContentHeader from '../common/content-header/contentHeader';
import Content from '../common/content/content';
import ValueBox from './valueBox/valueBox';
import Row from '../common/layout/row';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title="Dashboard" small="Versão 1.0" />
                <Content>
                    <Row>
                        <ValueBox cols="12 4" color="green" value="R$ 3000" text="Total de Créditos" icon="bank" />
                        <ValueBox cols="12 4" color="red" value="R$ 3000" text="Total de Débitos" icon="credit-card" />
                        <ValueBox cols="12 4" color="blue" value="R$ 3000" text="Valor Consolidado" icon="money" />
                    </Row>
                </Content>
            </div>
        );
    }
}

export default Dashboard;