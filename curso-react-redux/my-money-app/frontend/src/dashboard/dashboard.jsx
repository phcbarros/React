import React, { Component } from 'react';

import ContentHeader from '../common/content-header/contentHeader';
import Content from '../common/content/content';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title="Dashboard" small="Versão 1.0" />
                <Content>
                    Dashboard
                </Content>
            </div>
        );
    }
}

export default Dashboard;