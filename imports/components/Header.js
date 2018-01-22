import React from 'react'
import { graphql } from 'react-apollo'

const Header = () => {
  return (
    <div className="header">
    <img className="mobile-menu" src="https://cdn2.iconfinder.com/data/icons/most-useful-icons-4/50/HAMBURGER_MENU-512.png" alt="menu"/>
    <p className="app-name">Keep-Mini</p>    
  </div>  
  )
}

export default Header