import React from 'react'
import { LogInButton, WarningMessage } from './styled/LoginForm.styled';
import { Form, Title, Input } from './styled/Form.styled';

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