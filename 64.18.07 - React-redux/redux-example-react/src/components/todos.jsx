import { useReducer } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  add,
  changeIsComplete,
  clear,
  remove,
} from "../app/reducers/todosSlice";

const useTodos = () => {
  const todos = useSelector((state) => state.todos.todos);

  const dispatch = useDispatch();

  const _add = (title) => dispatch(add({ title }));
  const _clear = () => dispatch(clear());
  const _remove = (id) => dispatch(remove({ id }));
  const _changeIsComplete = (id) => dispatch(changeIsComplete({ id }));

  return {
    todos,
    add: _add,
    clear: _clear,
    remove: _remove,
    changeIsComplete: _changeIsComplete,
  };
};

const Todos = () => {
  const [input, setInput] = useState("");

  const { todos, add } = useTodos();

  return (
    <div>
      <input
        type="text"
        onInput={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={() => add(input)}>add</button>

      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.isComplete ? "V" : "X"} {todo.title}
        </div>
      ))}
    </div>
  );
};

export default Todos;

// const a = () => {
//   const [state, dispatch] = useReducer((state, action) => "new State", {
//     numberOfCars: 4,
//   });
// };
