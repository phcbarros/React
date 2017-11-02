import '../common/template/dependencies';
import React from 'react';

import Header from '../common/header/header';
import Sidebar from '../common/sidebar/sidebar';
import Footer from '../common/footer/footer';

export default props => (
    <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="content-wrapper">
            <h1>
                Conteúdo
            </h1>
        </div>
        <Footer />
    </div>
)