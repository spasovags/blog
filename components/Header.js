import React from 'react'
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <h1 className={`${styles["header-container"]}`}>Welcome to my blog!</h1>    
  )
}

export default Header