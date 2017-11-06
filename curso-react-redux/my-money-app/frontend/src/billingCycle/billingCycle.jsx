import React, { Component } from 'react';

import ContentHeader from '../common/content-header/contentHeader';
import Content from '../common/content/content';
import Tabs from '../common/tabs/tabs';
import TabsHeader from '../common/tabs/tabsHeader/tabsHeader';
import TabHeader from './../common/tabs/tabsHeader/tabHeader';
import TabsContent from '../common/tabs/tabsContent/tabsContent';
import TabContent from './../common/tabs/tabsContent/tabContent';

class BillingCycle extends Component {
    render() {
        return (
            <div>
                <ContentHeader title="Ciclo de Pagamentos" small="Cadastro" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader icon="list" label="Listar" target="tabList" />
                            <TabHeader icon="plus" label="Incluir" target="tabCreate" />
                            <TabHeader icon="pencil" label="Alterar" target="tabUpdate" />
                            <TabHeader icon="trash-o" label="Excluir" target="tabDelete" />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tabList">Lista</TabContent>
                            <TabContent id="tabCreate">Incluir</TabContent>
                            <TabContent id="tabUpdate">Alterar</TabContent>
                            <TabContent id="tabDelete">Exlcuir</TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        );
    }
}

export default BillingCycle;