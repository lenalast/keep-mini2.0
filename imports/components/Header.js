import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';
import styled from 'styled-components';
import { Avatar } from "./styled/Avatar.styled";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 24px;
  background-color: #FFBB00;
  font-family: 'Product Sans',Arial,sans-serif;
`

const AppNameWrapper = styled.div`
  display: flex;
`

const AppName = styled.span`
  font-size: 22px;
  margin-left: 24px;
`

const MobileMenuIcon = styled.img`
  width: 30px;
  height: 24px;
`

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
    <HeaderWrapper>
      <AppNameWrapper>
        <MobileMenuIcon
             src="https://cdn2.iconfinder.com/data/icons/most-useful-icons-4/50/HAMBURGER_MENU-512.png"
             alt="menu"
        />
        <AppName>Keep-Mini</AppName>
      </AppNameWrapper>
      {
        Meteor.userId() && !loading &&
        <UserMenu>
          <LogOutButton onClick={logOut}>Sign out</LogOutButton>
          <Avatar src={user.avatar} alt="avatar"/>
        </UserMenu>
      }
    </HeaderWrapper>
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