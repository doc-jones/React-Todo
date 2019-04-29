import React from 'react';

const Todo = props => {
  return (
    <div
      style={props.todo.completed ? { textDecoration: 'line-through', opacity: 0.5 } : null}
      onClick={() => props.handleToggleComplete(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};

export default Todo;