import React from 'react'
import styles from './headerBeauty.module.css'
import { NavLink } from 'react-router-dom'
export default function Header() {
  return (
  <>
    <nav className={styles.nav}>
        <span>
            logo t
        </span>
        <ul className={styles.list}>
            <li><NavLink to="/">Dashboard</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/Contact">Contact Us</NavLink></li>
        </ul>
    </nav>

  </>
  )
}
