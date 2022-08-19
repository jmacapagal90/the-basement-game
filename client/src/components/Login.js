import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

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
    <div class="game-info">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor='username'>Username</label>
        <input
        class="game-info"
          type='text'
          id='username'
          autoComplete='off'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <label htmlFor='password'>Password</label>
        <input
        class="game-info"
          type='password'
          id='password'
          autoComplete='current-password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <button class="game-info"type='submit'>Login</button>
      </form>
      <p>
        Not a user yet? <Link to='/signup'>Sign Up</Link>
      </p>
      <p style={{ color: "red" }}>{error}</p>
      

    </div>
  );
}

export default Login;
