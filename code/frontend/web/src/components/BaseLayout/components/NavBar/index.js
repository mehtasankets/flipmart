import React, { Fragment } from 'react';
import { Icon } from 'react-materialize';
import { NavLink } from 'react-router-dom';
import CartCount from '../../../CartCount';
import './index.css';

const Navbar = () => (
  <Fragment>
    <nav className="navbar">
      <div className="nav-links">
        <ul>
          <li><NavLink activeClassName="selected" className="nav-link" exact to="/">Home</NavLink></li>
          <li><NavLink activeClassName="selected" className="nav-link" to="/clothes">Clothes</NavLink></li>
          <li><NavLink activeClassName="selected" className="nav-link" to="/electronics">Electronics</NavLink></li>
        </ul>
      </div>
      <NavLink to="/orders" style={{ marginRight: '20px' }}>Orders</NavLink>
      <div className="shopping-cart">
        <NavLink to="/cart">
          <Icon medium>shopping_cart</Icon>
        </NavLink>
      </div>
    </nav>
    <CartCount />
  </Fragment>
);

export default Navbar;
