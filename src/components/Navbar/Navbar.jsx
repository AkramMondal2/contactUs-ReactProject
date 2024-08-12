import React from 'react'
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className= {`${styles.navbar} container`}>
       <h1>ContactUs</h1>
       <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
       </ul>
    </nav>
  )
}

export default Navbar