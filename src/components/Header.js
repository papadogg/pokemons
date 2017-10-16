import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Link className="navbar-brand" to="/">Pokemons</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header
