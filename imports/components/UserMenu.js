import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Avatar } from "./styled/Avatar.styled";
import { LogOutButton, UserMenuWrapper } from './styled/Header.styled';

const UserMenu = ({ user }) => {
  const logOut = () => Meteor.logout((err) => window.location.href = '/')

  console.log(user);

  return (
    <UserMenuWrapper>
      <LogOutButton onClick={logOut}>Sign out</LogOutButton>
      <Avatar src={user.avatar} alt="avatar"/>
    </UserMenuWrapper>
  )
};

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
    })
  }
)(UserMenu)
