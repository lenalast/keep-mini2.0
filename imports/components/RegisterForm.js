import React from 'react'
import { Avatar } from "./styled/Avatar.styled";
import { Form, Title, Input } from "./styled/Form.styled";
import {
  AvatarWrapper,
  ErrorMessage,
  Message,
  RegisterButton
} from './styled/RegisterForm.styled';



class RegisterForm extends React.Component {

  state = {
    selectedAvatar: '/avatar1.svg',
    registerMessage: '',
    emailMessage: '',
    passwordMessage: '',
  }

  registerUser = (e) => {
    e.preventDefault()

    const { selectedAvatar } = this.state;

    if ( this.email.value === '' ) {
      return this.setState({ emailMessage: 'Please, fill in your email' })
    }
    if ( this.password.value === '' ) {
      return this.setState({ passwordMessage: 'Please, fill in your password' })
    }

    Accounts.createUser({
        email: this.email.value,
        password: this.password.value,
        profile: {
          avatar: selectedAvatar
        }
      },
      error => error && console.error("register user", error)
    )
    this.email.value = ''
    this.password.value = ''
    this.setState({
      registerMessage: 'Welcome to Keep-mini! Log in below and start making todos',
      passwordMessage: '',
      emailMessage: ''
    })
  }

  render() {
    const { emailMessage, passwordMessage, registerMessage, selectedAvatar } = this.state

    return (
      <Form onSubmit={this.registerUser}>
        <div>
          <Title>Register account</Title>
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
          <AvatarWrapper>
            <Avatar selected={selectedAvatar === "/avatar1.svg"} src="/avatar1.svg"
                    onClick={() => this.setState({ selectedAvatar: '/avatar1.svg' })} alt="Avatar"/>
            <Avatar selected={selectedAvatar === "/avatar2.svg"} src="/avatar2.svg"
                    onClick={() => this.setState({ selectedAvatar: '/avatar2.svg' })} alt="Avatar"/>
            <Avatar selected={selectedAvatar === "/avatar3.svg"} src="/avatar3.svg"
                    onClick={() => this.setState({ selectedAvatar: '/avatar3.svg' })} alt="Avatar"/>
          </AvatarWrapper>
            <RegisterButton type="submit">Register</RegisterButton>
          <Message>{registerMessage}</Message>
          <ErrorMessage>{emailMessage}</ErrorMessage>
          <ErrorMessage>{passwordMessage}</ErrorMessage>
        </div>
      </Form>
    )
  }
}

export default RegisterForm