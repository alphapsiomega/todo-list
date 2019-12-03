import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.scss';
import Login from "./components/account/Login";
import CreateAccount from "./components/account/CreateAccount";
import {getToken} from "./config/Token";
import CheckJwt from "./components/account/CheckJWT";
import ShowTodos from "./components/todo/ShowTodos";
import AddTodo from "./components/todo/AddTodo";
import Logout from "./components/account/Logout";
import {getStatus} from "./api/account/Account";

function App() {
  const [loggedIn, setLoggedIn] = useState('checking');
  useEffect(() => {
    (async () => {
      let res = await getStatus();
      setLoggedIn(res ? res : 'invalid');
    })();
  }, []);

  if (loggedIn === 'checking') return <div className="App">Checking if logged in</div>;

  return (
    <div className="App content">
      {loggedIn === 'invalid' ?
        <div className="account-components">
          <Login/>
          <CreateAccount/>
        </div>
        :
        <h3>
          <span className="is-italic is-size-6">logged in as</span> {loggedIn.user.name}
        </h3>
      }
      <Logout/>
      <br/>
      <CheckJwt/>
      <hr/>
      <ShowTodos/>
    </div>
  );
}

export default App;
