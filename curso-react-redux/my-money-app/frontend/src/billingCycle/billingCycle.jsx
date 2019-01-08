import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ContentHeader from '../common/content-header/contentHeader';
import Content from '../common/content/content';
import Tabs from '../common/tabs/tabs';
import TabsHeader from '../common/tabs/tabsHeader/tabsHeader';
import TabHeader from './../common/tabs/tabsHeader/tabHeader';
import TabsContent from '../common/tabs/tabsContent/tabsContent';
import TabContent from './../common/tabs/tabsContent/tabContent';

import { init, create, update, remove } from './billingCycleActions';

import List from './list/billingCycleList';
import Form from './form/billingCycleForm';

export const BILLING_CYCLE_TABS = {
    tabList: 'tabList',
    tabCreate: 'tabCreate',
    tabUpdate: 'tabUpdate',
    tabDelete: 'tabDelete'
};

class BillingCycle extends Component {

    componentWillMount() {
        this.props.init();
    }

    render() {
        const { tabList, tabCreate, tabUpdate, tabDelete } = BILLING_CYCLE_TABS;
        return (
            <div>
                <ContentHeader title="Ciclo de Pagamentos" small="Cadastro" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader icon="list" label="Listar" target={tabList} />
                            <TabHeader icon="plus" label="Incluir" target={tabCreate} />
                            <TabHeader icon="pencil" label="Alterar" target={tabUpdate} />
                            <TabHeader icon="trash-o" label="Excluir" target={tabDelete} />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id={tabList}>
                                <List />
                            </TabContent>
                            <TabContent id={tabCreate}>
                                <Form onSubmit={(values) => this.props.create(values)} submitClass="primary" submitLabel="Cadastrar" />
                            </TabContent>
                            <TabContent id={tabUpdate}>
                                <Form onSubmit={this.props.update} submitClass="info" submitLabel="Atualizar"/>                            
                            </TabContent>
                            <TabContent id={tabDelete}>
                                <Form onSubmit={this.props.remove} readOnly={true} submitClass="danger" submitLabel="Remover"/>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ init, create, update, remove }, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycle);