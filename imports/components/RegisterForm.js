import React from 'react'
import styled from 'styled-components';
import { Avatar } from "./styled/Avatar.styled";
import { Form, Title, Input } from "./styled/Form.styled";

const RegisterButton = styled.button`
   border: none;
   outline: none;
   width: 80px;
   padding: 8px;
   font-family: "Roboto Slab", sans-serif;
   font-size: 14px;
   background-color: #5092FB;
   color: #fff;
   box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),
              0 3px 1px -2px rgba(0,0,0,0.2), 
              0 1px 5px 0 rgba(0,0,0,0.12);
`

const AvatarWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   max-width: 416px;
   margin-top: 16px;
   margin-bottom: 50px;
`

const Message = styled.div`
  font-family: "Roboto Slab", sans-serif;
  color: green;
`

class RegisterForm extends React.Component {

  state = {
    selectedAvatar: '/avatar1.svg',
    registerMessage: ''
  }

  registerUser = (e) => {
    e.preventDefault()

    const { selectedAvatar } = this.state;

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
    this.setState({registerMessage: 'Welcome to Keep-mini! Log in below and start making todos'})
  }

  render() {
    return (
      <Form onSubmit={this.registerUser}>
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
          <Avatar selected={this.state.selectedAvatar === "/avatar1.svg"} src="/avatar1.svg"
                  onClick={() => this.setState({ selectedAvatar: '/avatar1.svg' })} alt="Avatar"/>
          <Avatar selected={this.state.selectedAvatar === "/avatar2.svg"} src="/avatar2.svg"
                  onClick={() => this.setState({ selectedAvatar: '/avatar2.svg' })} alt="Avatar"/>
          <Avatar selected={this.state.selectedAvatar === "/avatar3.svg"} src="/avatar3.svg"
                  onClick={() => this.setState({ selectedAvatar: '/avatar3.svg' })} alt="Avatar"/>
        <RegisterButton type="submit">Register</RegisterButton>
        </AvatarWrapper>
        <Message>{this.state.registerMessage}</Message>
      </Form>
    )
  }
}

export default RegisterForm