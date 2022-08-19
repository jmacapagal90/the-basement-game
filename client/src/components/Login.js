import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { Container } from 'semantic-ui-react'

function Login({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState([])

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
      <form class="ui inverted form" onSubmit={(e)=>handleSubmit(e)}>
          <div class="two fields">
            <div class="field">
                  <label for='username'>Username</label>
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
            </div>
            <div class="field">
                <label for='password'>Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
            </div>
          </div>
      <button class="ui inverted red basic button" type='submit'>Login</button>
      </form>
    
      
      <h3>Wanna Play?</h3> 
        <button class="ui inverted red basic button"><NavLink to='/playersignup' activeStyle={{color: "red"}}>Sign Up</NavLink></button>
      
      <p style={{ color: "red" }}>{error}</p>
      

    </div>
    </Container>
  );
}

export default Login;
