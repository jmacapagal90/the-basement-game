import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { Container } from 'semantic-ui-react'

function SignUp({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([])
  const [checked,setChecked] = useState(0)

  async function handleSubmit(e) {
    if (checked === 0){
      alert("Please acknowledge terms and conditions")
      return 
    }

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
    <Container textAlign='center'>
      <div class="ui inverted segment">
        <h1>Sign Up</h1>
        {errors && errors.length > 0 ? (errors.map((error)=>{return(
          <h3 style={{ color: "red" }}>{error}</h3>
          )})
        ) : <></>}
        <form class="ui inverted form" onSubmit={handleSubmit}>
          <div class="four fields">
            <div class="field">
              <label htmlFor='last-name'>Email</label>
              <input
                type='text'
                id='email'
                autoComplete='off'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete='current-password'
              />
            </div>
            <div class="field">
              <label htmlFor='password'>Password Confirmation</label>
              <input
                type='password'
                id='password_confirmation'
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                autoComplete='current-password'
              />
            </div>
          <div class="ui inverted segment">
            <div class="inline field">
              <div class="checkbox" >
                    <input type="checkbox" tabindex="0" class="hidden" checked={checked} onChange={()=>setChecked(!checked)}/>
                    <label>I acknowledge that this is a game solely for entertainment purposes. Any depictions or portrayals in this game are strictly fictional. I agree that 
                      this was made by an unemployed recent Bootcamp Graduate and to be cool.
                    </label>
              </div>
            </div>
          </div>
        </div>
        <button class="ui inverted red basic button" type='submit'>Sign Up</button>
        </form>

        <h3>Already a Player?</h3>
        <button class="ui inverted red basic button"><NavLink to='/playerlogin' activeStyle={{color: "red"}}>Sign In</NavLink></button>

        </div>
    </Container>
  );
}

export default SignUp;
