import { action, runInAction, observable } from "mobx";

class TodoStore {
    id = 1
    @observable items = [{ id: 1, text: 'test', completed: false }]

    @action addTodo(text) {
      this.items.push({ id: ++this.id, text, completed: false })
    }

    @action editTodo(id, text) {
      this.items = this.items.map((s) => s.id === id ? ({ ...s, text }) : s)
    }

    @action deleteTodo(id) {
      this.items = this.items.filter((s) => s.id !== id)
    }

    @action completeTodo(id) {
      this.items = this.items.map((s) => s.id === id ? ({ ...s, completed: true }) : s)
    }

    @action completeAllTodos() {
      this.items = this.items.map((s) => ({ ...s, completed: true }))
    }

    @action clearCompleted() {
      this.items = this.items.map((s) => ({ ...s, completed: false }))
    }
}

const todoStore = new TodoStore()

export default todoStore
