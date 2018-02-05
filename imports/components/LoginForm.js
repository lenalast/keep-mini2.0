import React from 'react'
import styled from 'styled-components';
import { Form, Title, Input }  from './styled/Form.styled';

const LogInButton = styled.button`
   border: none;
   outline: none;
   width: 80px;
   padding: 8px;
   font-family: "Roboto Slab", sans-serif;
   font-size: 14px;
   box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),
              0 3px 1px -2px rgba(0,0,0,0.2), 
              0 1px 5px 0 rgba(0,0,0,0.12);
`

class LoginForm extends React.Component {
  signInUser = (e) => {
    e.preventDefault()
    console.log('sign in', Accounts)

    Meteor.loginWithPassword(
      this.email.value,
      this.password.value,
      error => {
        if ( error ) {
          console.error(error)
        }
        else {
          window.location.href = '/'
        }
      }
    )
  }

  render() {
    return (
      <Form onSubmit={this.signInUser}>
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
      </Form>
    )
  }
}

export default LoginForm