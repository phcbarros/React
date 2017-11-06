import React, { Component } from 'react';

import ContentHeader from '../common/content-header/contentHeader';
import Content from '../common/content/content';
import Tabs from '../common/tabs/tabs';
import TabsHeader from '../common/tabs/tabsHeader';
import TabsContent from '../common/tabs/tabsContent';

class BillingCycle extends Component {
    render() {
        return (
            <div>
                <ContentHeader title="Ciclo de Pagamentos" small="Cadastro" />
                <Content>
                    <Tabs>
                        <TabsHeader>

                        </TabsHeader>
                        <TabsContent>

                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        );
    }
}

export default BillingCycle;