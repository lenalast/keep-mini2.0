import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';
import styled from 'styled-components';
import { Avatar } from "./styled/Avatar.styled";


const LogOutButton = styled.div`
   transition: color 200ms;
   cursor: pointer;
   &:hover {
    color: #e8e8e8; 
  }
`

const UserMenu = styled.div`
  display: flex;
  align-items: center;
`

const Header = ({user, loading}) => {
  const logOut = () => Meteor.logout((err) => window.location.href = '/')
  return (
    <div className="header">
      <div className="app-name-wrapper">
        <img className="mobile-menu"
             src="https://cdn2.iconfinder.com/data/icons/most-useful-icons-4/50/HAMBURGER_MENU-512.png" alt="menu"/>
        <span className="app-name">Keep-Mini</span>
      </div>
      {
        Meteor.userId() && !loading &&
        <UserMenu>
          <LogOutButton onClick={logOut}>Sign out</LogOutButton>
          <Avatar src={user.avatar} alt="avatar"/>
        </UserMenu>
      }
    </div>
  )
}

const userQuery = gql`
    query User($_id: String!) {
        user(_id: $_id) {
            avatar
        }
    }
`

export default graphql(
  userQuery, {
    props: ({ data }) => ({ ...data }),
    options: (props) => ({
      variables: {
        _id: Meteor.userId()
      }
    })}
)(Header)