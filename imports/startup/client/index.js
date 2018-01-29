import { Meteor } from 'meteor/meteor'
import React from 'react'
import { render } from 'react-dom'

// router
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

// apollo
import { ApolloProvider } from 'react-apollo'
import { ApolloLink, from } from 'apollo-link'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import App from '../../components/App'

const httpLink = new HttpLink({
  uri: Meteor.absoluteUrl('graphql')
})

const authLink = new ApolloLink((operation, forward) => {
  const token = Accounts._storedLoginToken()
  operation.setContext(() => ({
    headers: {
      "meteor-login-token": token,
    }
  }))
  return forward(operation)
})

const cache = new InMemoryCache()

const client = new ApolloClient({
  link: from([authLink, httpLink]),
  cache
})

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <Router>
      <App/>
    </Router>
  </ApolloProvider>
)

Meteor.startup(() => {
  render(<ApolloApp/>, document.getElementById('app'))
})