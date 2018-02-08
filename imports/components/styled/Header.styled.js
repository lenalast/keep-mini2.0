import styled, { keyframes } from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 24px;
  background-color: #FFBB00;
  font-family: 'Product Sans',Arial,sans-serif;
`

export const AppNameWrapper = styled.div`
  display: flex;
`

export const AppName = styled.span`
  font-size: 22px;
  margin-left: 24px;
`

export const MobileMenuIcon = styled.img`
  width: 30px;
  height: 24px;
  cursor: pointer;
`

export const LogOutButton = styled.div`
   transition: color 200ms;
   cursor: pointer;
   &:hover {
    color: #e8e8e8; 
  }
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

export const SideBar = styled.div`
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

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
`