import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

function SignUp({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([])

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      username: username,
      password: password,
      password_confirmation: passwordConfirmation,
      email: email
    }
    const response = await fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    
    const data = response.json();
        if (response.ok) {
            data.then((data) => setUser(data));
            <Redirect to='/'/>;
        } else {
            data.then((err) => setErrors(err.errors))
        }
    }
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor='last-name'>Email</label>
        <input
          type='text'
          id='email'
          autoComplete='off'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
          autoComplete='off'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete='current-password'
        />
        <label htmlFor='password'>Password Confirmation</label>
        <input
          type='password'
          id='password_confirmation'
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete='current-password'
        />
        <button type='submit'>Sign Up</button>
        <p>
        Already a user? <Link to='/login'>Sign In</Link>
      </p>
      {errors && errors.length > 0 ? (errors.map((error)=>{return(
        <p style={{ color: "red" }}>{error}</p>
        )})
      ) : <></>}
      </form>
    </div>
  );
}

export default SignUp;
