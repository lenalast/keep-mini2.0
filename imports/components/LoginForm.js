import React from 'react'
import styled from 'styled-components';
import { Form, Title, Input } from './styled/Form.styled';

const LogInButton = styled.button`
   border: none;
   outline: none;
   width: 80px;
   padding: 8px;
   margin-top: 16px;
   font-family: "Roboto Slab", sans-serif;
   font-size: 14px;
   box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),
              0 3px 1px -2px rgba(0,0,0,0.2), 
              0 1px 5px 0 rgba(0,0,0,0.12);
  
   @media all and (max-width: 600px) {
      margin-top: 16px;
   }           
`

const WarningMessage = styled.div`
  padding-top: 32px;
  font-family: "Roboto Slab", sans-serif;
  font-size: 14px;
  text-shadow: rgba(0,0,0,0.7) 0 0.3px;
  color: #d7a02a;
`

class LoginForm extends React.Component {

  state = {
    warningMessage: ''
  }

  signInUser = (e) => {
    e.preventDefault()
    console.log('sign in', Accounts)

    Meteor.loginWithPassword(
      this.email.value,
      this.password.value,
      error => {
        if ( error ) {
          console.error(error)
          return this.setState({ warningMessage: 'Please, check your spelling or register as a new user' })
        }
        else {
          window.location.href = '/'
        }
      }
    )
  }

  render() {
    const { warningMessage } = this.state

    return (
      <Form onSubmit={this.signInUser}>
        <div>
          <Title>Log in</Title>
          <Input
            innerRef={input => this.email = input}
            type="email"
            name="email"
            placeholder="email"
          />
          <Input
            innerRef={input => this.password = input}
            type="password"
            name="password"
            placeholder="password"
          />
          <LogInButton type="submit">Log in</LogInButton>
          <WarningMessage>{warningMessage}</WarningMessage>
        </div>
      </Form>
    )
  }
}

export default LoginForm