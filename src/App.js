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
      console.log("sending");
      let res = await getStatus();
      setLoggedIn(res ? 'valid' : 'invalid');
    })();
  }, []);

  if (loggedIn === 'checking') return <div className="App">Checking if logged in</div>;

  return (
    <div className="App">
      {loggedIn === 'invalid' &&
      <div className="account-components">
        <Login/>
        <CreateAccount/>
      </div>
      }

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
