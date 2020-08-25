import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import todoStore from '../store/todoStore'
import { useObserver } from "mobx-react";

const TodoList = ({ filteredTodos = [], actions }) => (
  useObserver(() => (
    <ul className="todo-list">
      {
        todoStore.items.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      }
    </ul>
  ))
)

TodoList.propTypes = {
  filteredTodos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  actions: PropTypes.object.isRequired
}

export default TodoList
