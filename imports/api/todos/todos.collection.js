import { Mongo } from 'meteor/mongo'

const Todos = new Mongo.Collection("todos")

export default Todos
