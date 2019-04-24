// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";


const TodoList = props => {
    return (
      <div
        style={props.todo.completed ? { opacity: 0.5 } : null}
        onClick={() => props.handleToggleComplete(props.todo.id)}
      >
        {props.todo.task}
      </div>
    );
  };


export default TodoList