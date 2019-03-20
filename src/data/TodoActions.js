import TodoActionTypes from './TodoActionTypes'
import TodoDispatcher from './TodoDispatcher'

const Actions = {
  addTodo(text) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.ADD_TODO,
      text,
    })
  },
  removeTodo(id) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.DELETE_TODO,
      id,
    })
  },
  finishTodo(id) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.FINISH_TODO,
      id,
    })
  }
}

export default Actions
