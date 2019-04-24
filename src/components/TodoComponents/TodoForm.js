import React from 'react';


const TodoForm = props => {
  return (
    <form>
      <input
        type="text"
        name="todo"
        value={props.value}
        placeholder="...todo"
      />
      <button>Add Todo</button>
      <button>Clear Completed</button>
    </form>
  );
};

export default TodoForm;