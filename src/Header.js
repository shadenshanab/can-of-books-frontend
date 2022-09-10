import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './style.css';
import LoginButton from './components/Login';
import LogoutButton from './components/Logout';
import { withAuth0 } from '@auth0/auth0-react';

class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navi'>
        <Navbar.Brand className='fav-book'>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        {isAuthenticated && <NavItem><Link to="./About.js" className="nav-link">About</Link></NavItem>}
        <NavItem><LoginButton /></NavItem>
        <NavItem><LogoutButton /></NavItem>
      </Navbar>
    )
  }
}

export default withAuth0(Header);
