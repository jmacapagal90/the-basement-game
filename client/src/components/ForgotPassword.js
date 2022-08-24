import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Container,Form,Segment } from 'semantic-ui-react'

function ForgotPassword(){
    let history = useHistory()
    const [email, setEmail] = useState('');
    const [error, setError] = useState([]);

    async function forgotPassword(e){
        
        e.preventDefault()
        const response = await fetch('/password/forgot', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email
          }),
        })
        
        const data = response.json()
          if (response.ok) {
            history.push("/resetpassword")
          } else {
            data.then((err) => setError(err.error))
          }
      }

 return (
    <Container textAlign='center'>
    <Segment inverted>
      <h3>Forgot Password?</h3>
      <h3>Enter Your Email Below To Reset Password</h3>
      <Form inverted onSubmit={(e)=>forgotPassword(e)}>
      <Form.Group widths="equal">
      <Form.Input 
            required
            label="E-mail"
            autoComplete='off'
            placeholder="helpme@aol.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            </Form.Group>
         </Form>
    <div>
      <button class="ui inverted red basic button">
        <NavLink to='/resetpassword' activeStyle={{color: "red"}} onClick={(e)=>forgotPassword(e)}>
            Reset Password</NavLink>
    </button>
    </div>  
    </Segment>
    </Container>
 )   
}

export default ForgotPassword;