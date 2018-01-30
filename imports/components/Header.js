import React from 'react'
import { graphql } from 'react-apollo'
import styled from 'styled-components';

const LogOutButton = styled.div`
   transition: color 200ms;
   cursor: pointer;
   &:hover {
    color: #e8e8e8; 
  }
`

const Header = () => {
  const logOut = () => Meteor.logout((err) => window.location.href = '/')
  return (
    <div className="header">
      <div className="app-name-wrapper">
        <img className="mobile-menu"
             src="https://cdn2.iconfinder.com/data/icons/most-useful-icons-4/50/HAMBURGER_MENU-512.png" alt="menu"/>
        <span className="app-name">Keep-Mini</span>
      </div>
      {
        Meteor.userId() &&
        <LogOutButton onClick={logOut}>Sign out</LogOutButton>
      }
    </div>
  )
}

export default Header