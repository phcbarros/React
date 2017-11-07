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

import { selectTab, showTabs } from './../common/tabs/tabActions';
import { create } from './billingCycleActions';

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
        const { tabList, tabCreate } = BILLING_CYCLE_TABS;
        this.props.selectTab(tabList);
        this.props.showTabs(tabList, tabCreate);
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
                                <Form onSubmit={this.props.create} />
                            </TabContent>
                            <TabContent id={tabUpdate}>
                                <Form />                            
                            </TabContent>
                            <TabContent id={tabDelete}>Excluir</TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectTab, showTabs, create }, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycle);