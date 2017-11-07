import '../common/template/dependencies';
import React from 'react';

import Header from '../common/header/header';
import Sidebar from '../common/sidebar/sidebar';
import Footer from '../common/footer/footer';
import Routes from './routes';
import Message from '../common/message/message';

export default props => (
    <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="content-wrapper">
            <Routes />
        </div>
        <Footer />
        <Message />
    </div>
)