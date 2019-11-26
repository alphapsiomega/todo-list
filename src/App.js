import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Login from "./components/account/Login";
import CreateAccount from "./components/account/CreateAccount";
import {getToken} from "./config/Token";
import CheckJwt from "./components/account/CheckJWT";
import ShowTodos from "./components/todo/ShowTodos";
import AddTodo from "./components/todo/AddTodo";
import Logout from "./components/account/Logout";

function App() {
  return (
    <div className="App">
      <div className="account-components">
        <Login/>
        <CreateAccount/>
      </div>
      <Logout/>
      <br/>
      <CheckJwt/>
      <hr/>
      <AddTodo/>
      <ShowTodos/>
    </div>
  );
}

export default App;
