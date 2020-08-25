import React from 'react'
import PropTypes from 'prop-types'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'
import todoStore from '../store/todoStore'
import { toJS } from 'mobx';

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

const Footer = () => {
  const items = toJS(todoStore.items)
  const activeCount = items.filter((s) => !s.completed)
  const completedCount = items.filter((s) => s.completed)
  const itemWord = activeCount === 1 ? 'item' : 'items'
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount ? '' : 'No'}</strong> {itemWord} left
      </span>
      {
        !!completedCount &&
        <button
          className="clear-completed"
          onClick={() => todoStore.clearCompleted()}
        >Clear completed</button>

      }
    </footer>
  )
}

export default Footer
