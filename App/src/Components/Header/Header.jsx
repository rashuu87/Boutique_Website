import React, { useState } from 'react';
import styles from './headerBeauty.module.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <NavLink to="/">BoutiqueName</NavLink>
      </div>
      <ul className={`${styles.list} ${isOpen ? styles.active : ''}`}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/shop">Shop</NavLink></li>
        <li><NavLink to="/new-arrivals">New Arrivals</NavLink></li>
        <li><NavLink to="/sale">Sale</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
      </ul>
      <div className={styles.navIcons}>
        <NavLink to="/search"><FontAwesomeIcon icon={faSearch} /></NavLink>
        <NavLink to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></NavLink>
        <NavLink to="/profile"><FontAwesomeIcon icon={faUser} /></NavLink>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </div>
    </nav>
  );
}
