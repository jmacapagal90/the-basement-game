import {useState} from "react";
import { Container,Form,Segment } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';


function ResetPassword({setUser}){
    const [ enterEmail, setEnterEmail ] = useState("")
    const [ passwordToken, setPasswordToken] = useState("")
    const [ newPassword, setNewPassword ] = useState("")
    const [ newPasswordConfirm, setNewPasswordConfirm ] = useState("")
    const [errors, setErrors] = useState([])

    async function handleReset(e) {
        
    
        e.preventDefault();
        const formData = {
          email: enterEmail,
          token: passwordToken,
          password: newPassword,
          password_confirmation: newPasswordConfirm,
        }
        const response = await fetch('/password/reset', {
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
        <Container textAlign="center">
        <Segment inverted>
            <h1>Reset Password</h1>
            <h3>Enter the Temporary Password You Received via Email Below</h3>
            {errors && errors.length > 0 ? (errors.map((error)=>{return(
          <h3 style={{ color: "red" }}>{error}</h3>
          )})
        ) : <></>}
        <Form inverted onSubmit={(e)=>handleReset(e)}>
          <Form.Group widths="equal">

              <Form.Input 
                required
                label="E-mail"
                autoComplete='off'
                placeholder="helpme@aol.com"
                value={enterEmail}
                onChange={(e) => setEnterEmail(e.target.value)}
              />
            <Form.Input 
                required
                label="Temporary Password"
                autoComplete='off'
                value={passwordToken}
                onChange={(e) => setPasswordToken(e.target.value)}
              />
              <Form.Input
                required
                label="Password"
                type='password'
                id='password'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                autoComplete='current-password'
              />
              <Form.Input
                required
                label="Confirm Password"
                type='password'
                id='password_confirmation'
                value={newPasswordConfirm}
                onChange={(e) => setNewPasswordConfirm(e.target.value)}
                autoComplete='current-password'
              />
          </Form.Group >
           <button class="ui inverted red basic massive button" type='submit'>Reset</button>
        </Form>
        </Segment>
        </Container>
    )
}

export default ResetPassword;