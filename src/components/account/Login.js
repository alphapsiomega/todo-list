import React from 'react';
import {login} from "../../api/account/Account";

function Login() {
  return (
    <div className="box has-background-white content">
      <h3>Login</h3>
      <form onSubmit={async function (e) {
        e.preventDefault();
        const name = e.target.username.value;
        const pass = e.target.password.value;

        if (await login({name, pass})) {
          console.log('logged in');
          window.location.reload();
        } else {
          console.log('failed')
        }
      }}>
        <div className="field">
          <input className="input" placeholder="Username" type="text" name="username"/>
        </div>
        <div className="field">
          <input id="password" className="input" placeholder="Password" type="password" name="password"/>
        </div>
        <input className="button is-primary" type="submit" value="Login"/>
      </form>
    </div>
  );
}

export default Login;
