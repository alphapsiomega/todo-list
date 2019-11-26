import React, {useEffect, useState} from 'react';
import {getTodos} from "../../api/todo/Todo";
import {createAccount} from "../../api/account/Account";

function ShowTodos(props) {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    (
      async () => {
        setTodos(await getTodos());
      }
    )();
  }, []);

  if (!todos) return <div>Todos are loading</div>;

  return (

    <div className="field todo-container">
      {todos.map((todo, index) => {
        return <div key={index} className="notification is-white todo-item">
          <button className="delete"/>

          <div className="is-size-3">
            {todo.title}
          </div>
          <div>
            {todo.description}
          </div>
        </div>
      })}
    </div>
  );
}

export default ShowTodos;
