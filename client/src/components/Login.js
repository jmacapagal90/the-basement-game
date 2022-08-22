import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink, Redirect } from 'react-router-dom';
import { Container } from 'semantic-ui-react'


function Login({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState([])

  const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
  
    return <button onClick={() => loginWithRedirect()}>Log In</button>;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
    
    const data = response.json()
      if (response.ok) {
        data.then((data) => setUser(data));
        <Redirect to='/' />;
      } else {
        data.then((err) => setError(err.error))
      }
    }

    
  return (
    <Container textAlign='center'>
    <div class="ui inverted segment">
      <h1>Login</h1>
      <h3 style={{ color: "red" }}>{error}</h3>
      <form class="ui inverted form" onSubmit={(e)=>handleSubmit(e)}>
          <div class="two fields">
            <div class="field">
                  <label htmlFor='username'>Username</label>
                  <input
                    type='text'
                    id='username'
                    autoComplete='off'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
            </div>
            <div class="field">
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  id='password'
                  autoComplete='current-password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
            </div>
          </div>
     {LoginButton()}
      </form>
    
      
      <h3>Already A Player?</h3> 
      <button class="ui inverted red basic button"><NavLink to='/playersignup' activeStyle={{color: "red"}}>Sign Up</NavLink></button>
      
      
      

    </div>
    </Container>
  );
}

export default Login;
