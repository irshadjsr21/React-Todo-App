import React from "react";

const Todo = ({ todo, onDelete, onDone }) => {
  const { title, isDone } = todo;
  return (
    <div className="row bg-secondary p-2 text-white mb-2">
      <div className="col">
        <input
          type="checkbox"
          name="isDone"
          id="isDone"
          checked={isDone}
          onChange={() => onDone(todo)}
        />
      </div>
      <div
        className="col"
        style={isDone ? { textDecoration: "line-through" } : {}}
      >
        {title}
      </div>
      <div className="col">
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(todo)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
