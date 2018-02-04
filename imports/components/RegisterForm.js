import React from 'react'
import { Avatar } from "./styled/Avatar.styled";

class RegisterForm extends React.Component {

  state = {
    selectedAvatar: '/avatar1.svg'
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
  }

  render() {
    return (
      <form onSubmit={this.registerUser}>
        <h1>Register account</h1>
        <input
          ref={input => this.email = input}
          type="email"
          name="email"
          placeholder="email"
        />
        <input
          ref={input => this.password = input}
          type="password"
          name="password"
          placeholder="password"
        />
        <Avatar selected={this.state.selectedAvatar === "/avatar1.svg"} src="/avatar1.svg" onClick={() => this.setState({selectedAvatar: '/avatar1.svg'})} alt=""/>
        <Avatar selected={this.state.selectedAvatar === "/avatar2.svg"} src="/avatar2.svg" onClick={() => this.setState({selectedAvatar: '/avatar2.svg'})} alt=""/>
        <Avatar selected={this.state.selectedAvatar === "/avatar3.svg"} src="/avatar3.svg" onClick={() => this.setState({selectedAvatar: '/avatar3.svg'})} alt=""/>
        <button type="submit">Register</button>
      </form>
    )
  }
}

export default RegisterForm