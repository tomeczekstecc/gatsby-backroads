import React, { useState } from 'react'
import {Link} from 'gatsby'
import styles from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import links from "../constants/links"
import {socialIcons} from "../constants/socialIcons"
import logo from "../images/logo.svg"


const Navbar = () => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navCenter}>
          <div className={styles.navHeader}>
            <img src={logo} alt="backroads logo" />
            <button
              type="button"
              className={styles.logoBtn}
              onClick={toggleNav}
            >
              <FaAlignRight className={styles.logoIcon} />
            </button>
          </div> 
          <ul
            className={
              isOpen
                ? `${styles.navLinks} ${styles.showNav}`
                : `${styles.navLinks}`
            }
          >
            {links.map((item, index) => (
              <li key ={index}><Link to={item.path}>{item.text}</Link> </li>
            ))}
          </ul>
          <div
          className={styles.navSocialLinks}>
            {socialIcons.map((item, i)=>{
              return <a href={item.url} key = {i} target="_blank" rel="noopener noreferer">{item.ikona}</a>
            })}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
