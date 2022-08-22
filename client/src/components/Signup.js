import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { Container,Form,Segment } from 'semantic-ui-react'

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
      <Segment inverted>
        <h1>Sign Up</h1>
        {errors && errors.length > 0 ? (errors.map((error)=>{return(
          <h3 style={{ color: "red" }}>{error}</h3>
          )})
        ) : <></>}
        <Form inverted onSubmit={(e)=>handleSubmit(e)}>
          <Form.Group widths="equal">

              <Form.Input 
                required
                label="E-mail"
                autoComplete='off'
                placeholder="helpme@aol.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Input
                required
                label="Username"
                type='text'
                id='username'
                placeholder="helpme"
                autoComplete='off'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Form.Input
                required
                label="Password"
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete='current-password'
              />
              <Form.Input
                required
                label="Confirm Password"
                type='password'
                id='password_confirmation'
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                autoComplete='current-password'
              />
          </Form.Group >
          <Form.Checkbox label="I acknowledge that this is a game solely for entertainment purposes. Any depictions or portrayals in this game are strictly fictional."/>
          <button class="ui inverted red basic massive button" type='submit'>Sign Up</button>
        </Form>

        <h3>Already Part of the Game?</h3>
        <button class="ui inverted red basic mini button"><NavLink to='/playerlogin' activeStyle={{color: "red"}}>Sign In</NavLink></button>

        </Segment>
    </Container>
  );
}

export default SignUp;
