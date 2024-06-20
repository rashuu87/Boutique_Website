import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
  <>
    <nav>
        <span>
            logo t
        </span>
        <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact Us</Link></li>
        </ul>
    </nav>

  </>
  )
}
