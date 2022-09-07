import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './style.css';

class Header extends React.Component {
  render() {
   
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navi'>
        <Navbar.Brand className='fav-book'>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem><Link to="./About.js" className="nav-link">About</Link></NavItem>
      </Navbar>
    )
  }
}

export default Header;
