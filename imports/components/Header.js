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
const Avatar = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 16px;
  padding: 6px;
  border-radius: 50%;
  background-color: #fff;
`

const UserMenu = styled.div`
  display: flex;
  align-items: center;
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
        <UserMenu>
          <LogOutButton onClick={logOut}>Sign out</LogOutButton>
          <Avatar src="/avatar1.svg" alt="avatar"/>
        </UserMenu>
      }
    </div>
  )
}

export default Header