import React from 'react';
import UserScorecard from './UserScorecard';
import { Link, Redirect } from 'react-router-dom';
import {Container, Loader} from 'semantic-ui-react'

function AccountPage({ user }) {
  
    async function handleDelete(){
        const response = await fetch(`/players/${user.id}`, {method: 'DELETE'})
        const data = response.json()
        alert("...We were just starting to have some fun")
        if (response.ok){
            <Redirect to='/' />
            window.location.reload()
        } else {
            console.log(data.error)
        }
    }
    

  return (
    <Container textAlign="center">
    {user ?
      <div class="ui inverted segment">
          <div>
            <br></br>
            <br></br>
            <h1>Welcome, @{user.username}!</h1>
            <h2>View your latest <span style={{textDecoration: 'line-through'}}>deaths</span> results here!</h2>
            <p></p>
            {user.scores_w_summary.slice(0,5).map((score)=>{
                return (
                  <div class="ui inverted cards">
                    <UserScorecard 
                        username={user.username}
                        points={score.points} 
                        summary={score.summary} 
                        updated_at={score.updated_at}
                        />
                  </div>
                )
              }
            )}
      </div>
      <h4>Had Enough?</h4>
        <div >
            <button class="ui inverted red basic button" onClick={handleDelete}>Delete My Account</button>
        </div>
      </div>
     : 
     <div class="ui inverted segment">
        <Loader />
     </div>
    }
    </Container>
  );
}

export default AccountPage;
