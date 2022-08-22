import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { Container,Form,Segment } from 'semantic-ui-react'

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
    <Segment inverted>
      <h1>Login</h1>
      <h3 style={{ color: "red" }}>{error ? error : null}</h3>
      <Form inverted onSubmit={(e)=>handleSubmit(e)}>
        <Form.Group widths="equal">
          <Form.Input
                  label="Username"
                  type='text'
                  id='username'
                  autoComplete='off'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  />
            <Form.Input 
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='current-password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
          </Form.Group>
      <button class="ui inverted red basic massive button" type='submit'>Login</button>
      </Form>
    
      
      <h3>Already A Player?</h3> 
      <button class="ui inverted red basic mini button"><NavLink to='/playersignup' activeStyle={{color: "red"}}>Sign Up</NavLink></button>
      
      
      

    </Segment>
    </Container>
  );
}

export default Login;
