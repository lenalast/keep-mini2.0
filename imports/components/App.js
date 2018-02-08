import '../sass/main'
import React from 'react'
import Header from './Header'
import AccessPage from "./AccessPage";
import TodoListsPage from "./TodoListsPage";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header/>
      <Route exact path="/" component={Meteor.userId() ? TodoListsPage : AccessPage}/>
    </div>
  )
}

export default App