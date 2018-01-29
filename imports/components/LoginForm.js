import React from 'react'

class LoginForm extends React.Component {
  signInUser = (e) => {
    e.preventDefault()
    console.log('sign in', Accounts)

    Meteor.loginWithPassword(
      this.email.value,
      this.password.value,
      error => {
        if (error) {
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
      <form onSubmit={this.signInUser}>
        <h1>Log in</h1>
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
        <button type="submit">Log in</button>
      </form>
    )
  }
}

export default LoginForm