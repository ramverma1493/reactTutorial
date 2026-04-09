import React from 'react'
import styles from './NavBar.module.css'
import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <div className={styles.navBar}>
        <div className={styles.logo}>
            <p>FSD</p>
        </div>

        <ul className={styles.navItems}>
            <li className={styles.navItem}><Link to="/">Home</Link></li>
            <li className={styles.navItem}><Link to="/about">About</Link></li>
            <li className={styles.navItem}><Link to="/blog">Blog</Link></li>
            <li className={styles.navItem}><Link to="/contact">Contact</Link></li>
            <li className={styles.navItem}><Link to="/profile">Profile</Link></li>
        </ul>
      

    </div>
  )
}
