import React from 'react';

export default props => (
    <nav className='navbar navbar-default'>
        <div className='container-fluid'>
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className='navbar-brand' href="#">
                    <i className="fa fa-calendar-check-o">TodoApp</i>
                </a>
            </div>
            <div className="collapse navbar-collapse" id="navbar">
                <ul className="nav navbar-nav">
                    <li>
                        <a href="#/todos">Tarefas</a>
                    </li>
                    <li>
                        <a href="#/about">Sobre</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)