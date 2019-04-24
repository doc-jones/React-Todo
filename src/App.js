import React, {Component} from 'react';

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
}

addTodo = function event() {
  event.preventDefault()
  const newTodo = {}
  this.setState({ 
    todos: [...this.state.todos, newTodo], 
    todo: '' 
});
}

export default App
