import React from 'react';
import {createAccount} from "../../api/account/Account";
import {createTodo} from "../../api/todo/Todo";

function AddTodo(props) {
  return (
    <div className="box has-background-white content" style={{width: '500px'}}>
      <h3>New Todo</h3>
      <form onSubmit={async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        e.target.title.value = '';
        e.target.description.value = '';
        await createTodo({title, description});
      }}>
        <div className="field">
          <input className="input" autoComplete={'off'} placeholder="Title" type="text" name="title"/>
        </div>
        <div className="field">
          <input className="input" placeholder="Description" type="text" name="description"/>
        </div>
        <input className="button is-primary" type="submit" value={"Add"}/>
      </form>
    </div>
  );
}

export default AddTodo;
