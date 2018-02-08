import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';
import { Avatar } from "./styled/Avatar.styled";
import {
  HeaderWrapper,
  AppName,
  MobileMenuIcon,
  UserMenu,
  AppNameWrapper,
  LogOutButton,
  SideBar
} from './styled/Header.styled';

class Header extends React.Component {
  state = {
    showHideSideBar: false
  }

  render() {
    const logOut = () => Meteor.logout((err) => window.location.href = '/')
    const { user, loading } = this.props
    return (
      <HeaderWrapper>
        <AppNameWrapper>
          <MobileMenuIcon
            src="https://cdn2.iconfinder.com/data/icons/most-useful-icons-4/50/HAMBURGER_MENU-512.png"
            alt="menu"
            onClick={() => this.setState({ showHideSideBar: !this.state.showHideSideBar })}
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
        <SideBar show={this.state.showHideSideBar}>
          <div>
            Thank you for using Keep-mini.
            Let me know if you have any questions!
          </div>
          <div>
            Contact me at my github "lenalast".
          </div>
        </SideBar>
      </HeaderWrapper>
    )
  }
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
    })
  }
)(Header)