import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ContentHeader from '../common/content-header/contentHeader';
import Content from '../common/content/content';
import ValueBox from './valueBox/valueBox';
import Row from '../common/layout/row';
import getSummary from './dashboardActions';

class Dashboard extends Component {

    componentWillMount() {
        this.props.getSummary();
    }

    render() {
        const { credit, debt } = this.props.summary;
        return (
            <div>
                <ContentHeader title="Dashboard" small="Versão 1.0" />
                <Content>
                    <Row>
                        <ValueBox cols="12 4" color="green" icon="bank"
                            value={`R$ ${credit}`} text="Total de Créditos" />
                        <ValueBox cols="12 4" color="red" icon="credit-card"
                            value={`R$ ${debt}`} text="Total de Débitos" />
                        <ValueBox cols="12 4" color="blue" icon="money"
                            value={`R$ ${credit - debt}`} text="Valor Consolidado" />
                    </Row>
                </Content>
            </div>
        );
    }
}

//Mapeando o state para as props
const mapStateToProps = state => ({ summary: state.dashboard.summary });

//Mapeando as ações para as props
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);