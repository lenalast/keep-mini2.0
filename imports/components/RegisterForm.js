import React from 'react'

class RegisterForm extends React.Component {
  registerUser = (e) => {
    e.preventDefault()
    console.log('register user', Accounts)

    Accounts.createUser({
        email: this.email.value,
        password: this.password.value,
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
        <button type="submit">Register</button>
      </form>
    )
  }
}

export default RegisterForm