import {Container} from 'flux/utils'
import TodoView from '../views/TodoView'
import TodoStore from '../data/TodoStore'
import TodoActions from '../data/TodoActions'

function getStores() {
  return [
    TodoStore,
  ]
}

function getState() {
  return {
    todos: TodoStore.getState(),
    removeTodo: TodoActions.removeTodo,
    finishTodo: TodoActions.finishTodo,
  }
}

export default Container.createFunctional(TodoView, getStores, getState)
