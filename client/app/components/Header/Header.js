import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from './spellbook.png'

const Header = () => (
  <header>
    <div>
      <Navbar className="navbar-dark bg-dark">
        <Nav>
          <NavItem>
            <NavLink>
              <Link to="/">Spellbook</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to="/helloworld">Hello World</Link>
            </NavLink>
          </NavItem>
        </Nav>
        <div className="mx-auto">
          <NavbarBrand>
            <img src={logo} height="75" width="450" id="logo" />
          </NavbarBrand>
        </div>
        <hr />
      </Navbar>
    </div>
  </header>
);

export default Header;
