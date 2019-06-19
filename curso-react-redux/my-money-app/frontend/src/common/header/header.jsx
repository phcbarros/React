import React from 'react'
import Navbar from '../navbar/navbar'

export default (props) => (
  <header className="main-header">
    <a href="/#/" className="logo">
      <span className="logo-mini">
        <strong>My</strong> M
      </span>
      <span className="logo-lg">
        <i className="fa fa-money" />
        <strong> My</strong> Money
      </span>
    </a>
    <nav className="navbar navbar-static-top">
      <a className="sidebar-toggle" data-toggle="offcanvas" />
      <Navbar />
    </nav>
  </header>
)
