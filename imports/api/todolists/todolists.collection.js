import { Mongo } from 'meteor/mongo'

const TodoLists = new Mongo.Collection("todoLists")

export default TodoLists
