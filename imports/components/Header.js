import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';
import styled, { keyframes } from 'styled-components';
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
  cursor: pointer;
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

const SlideIn = keyframes`
 from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`

const SideBar = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  position: absolute;
  top: 60px;
  left: 0;
  width: 200px;
  height: 100%;
  padding: 16px;
  background-color: #e8e8e8;
  font-family: "Roboto Slab", sans-serif;
  font-size: 14px;
  line-height: 1.5;
  border-right: 1px solid rgba(117,117,117,0.5);
  animation: ${SlideIn} 500ms;
  z-index: 1;
`


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