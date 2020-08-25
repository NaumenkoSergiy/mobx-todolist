import React from 'react'
import PropTypes from 'prop-types'
import Footer from './Footer'
import TodoList from './TodoList'
import todoStore from '../store/todoStore'

const MainSection = () => {
  const todosCount = todoStore.items.length
  const completedCount = todoStore.items.filter((s) => s.completed)

  return (
    <section className="main">
      {
        !!todosCount &&
        <span>
          <input
            className="toggle-all"
            type="checkbox"
            checked={completedCount === todosCount}
            readOnly
            />
          <label onClick={todoStore.completeAllTodos}/>
        </span>
      }
      <TodoList />
      {
        !!todosCount &&
        <Footer
          />
      }
    </section>
  )
}

MainSection.propTypes = {
  todosCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection;
