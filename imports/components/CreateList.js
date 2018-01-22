import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const createTodo = gql`
  mutation createTodo($name: String!) {
    createTodo(name: $name) {
      _id
      name
    }
  }
`

class CreateList extends Component {
  submitForm = () => {
    this.props.createTodo({
      variables: {
        name: this.name.value
      }})
      .then(({data}) => {
        console.log('Res data: ', data)
      this.props.refetch()
    })
      .catch(err => {
      console.error(err)})
  }

  render() {
    return(
      <div className="create-list-wrapper">
        <input className="create-input" type="text" placeholder="Gör en anteckning ..." ref={(input) => this.name = input}/>
        {/* <button onClick={this.submitForm}>Submit</button>         */}
      </div>
    ) 
  }
}

export default graphql(createTodo, {
  name: "createTodo"
})(CreateList)