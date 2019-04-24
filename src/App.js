import React, {Component} from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      todo: ''
    }
  }
};

// addTodo = event => {
//   event.preventDefault()
//   const newTodo = {}
//   this.setState({ 
//     todos: [...this.state.todos, newTodo], 
//     todo: '' 
// });
// }

render() {
  return (
    <div>
      <TodoList
        handleToggleComplete={this.toggleTodoComplete}
        todos={this.state.todos}
      />
      <TodoForm
        value={this.state.todo}
        // handleTodoChange={this.changeTodo}
        // handleAddTodo={this.addTodo}
        // handleClearTodos={this.clearCompletedTodos}
      />
    </div>
  );
}

export default App
