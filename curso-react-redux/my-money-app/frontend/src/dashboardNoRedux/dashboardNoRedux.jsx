import React, { Component } from 'react';
import axios from 'axios';

import ContentHeader from '../common/content-header/contentHeader';
import Content from '../common/content/content';
import ValueBox from '../common/valueBox/valueBox';
import Row from '../common/layout/row';
import { connect } from 'react-redux';

const BASE_URL = 'http://localhost:3003/api';

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = { credit: 0, debt: 0};
    }

    componentWillMount() {
        axios.get(`${BASE_URL}/billingCycles/summary`)
            .then(resp => this.setState(resp.data));
    }

    render() {
        const { credit, debt } = this.state;
        return (
            <div>
                <ContentHeader title="Dashboard" small="Versão 2.0" />
                <Content>
                    <Row>
                        <ValueBox cols="12 4" color="green" icon="bank"
                            value={`R$ ${credit.toFixed(2)}`} text="Total de Créditos" />
                        <ValueBox cols="12 4" color="red" icon="credit-card"
                            value={`R$ ${debt.toFixed(2)}`} text="Total de Débitos" />
                        <ValueBox cols="12 4" color="blue" icon="money"
                            value={`R$ ${(credit - debt).toFixed(2)}`} text="Valor Consolidado" />
                    </Row>
                </Content>
            </div>
        );
    }
}