import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import './navbar.css'

class Navbar extends React.Component {
  render() {
    return (
    <ReactBootStrap.Navbar collapseOnSelect expand="lg" className="color-nav" variant="dark">
    <ReactBootStrap.Navbar.Brand href="/">Kevin David Cuadros</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
      <ReactBootStrap.Nav className="mr-auto">
        <ReactBootStrap.Nav.Link href="/projects">My Projects</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="/skills">Skills</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="/experience">Experience</ReactBootStrap.Nav.Link>
      </ReactBootStrap.Nav>
    </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Navbar>
    )
  }
}

export default Navbar;
