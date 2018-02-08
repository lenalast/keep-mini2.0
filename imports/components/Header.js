import React from 'react'
import UserMenu from './UserMenu';
import {
  HeaderWrapper,
  AppName,
  MobileMenuIcon,
  AppNameWrapper,
  SideBar
} from './styled/Header.styled';

class Header extends React.Component {
  state = {
    showHideSideBar: false
  }

  render() {
    const { loading } = this.props
    return (
      <HeaderWrapper>
        <SideBar show={this.state.showHideSideBar}>
          <div>
            Thank you for using Keep-mini.
            Let me know if you have any questions!
          </div>
          <div>
            Contact me at my github "lenalast".
          </div>
        </SideBar>
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
          <UserMenu user={Meteor.userId()}/>
        }
      </HeaderWrapper>
    )
  }
}

export default Header