import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import Game from './views/game'
import Pricing from './components/pricing'
import * as _ from 'lodash'
import TodoViewContainer from './containers/TodoViewContainer'
import TodoActions from './data//TodoActions'

ReactDOM.render(
  <TodoViewContainer />,
  document.getElementById('root')
)

TodoActions.addTodo('My first task');
TodoActions.addTodo('Another task');
TodoActions.addTodo('Finish this tutorial');