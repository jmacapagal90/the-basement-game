import React, { useRef } from 'react';
import UserScorecard from './UserScorecard';
import { Link, Redirect } from 'react-router-dom';
import {Container, Button,Reveal, Loader, Card} from 'semantic-ui-react'

function AccountPage({ user }) {
    const myRef = useRef(null)
    async function handleDelete(){
        const response = await fetch(`/players/${user.id}`, {method: 'DELETE'})
        const data = response.json()
        alert("Go Ahead and Leave, Coward")
        if (response.ok){
            <Redirect to='/' />
            window.location.reload()
        } else {
            console.log(data.error)
        }
    }
    const executeScroll = () => {myRef.current.scrollIntoView({behavior: 'smooth',block: 'start'})}
      
      

  return (
    <Container textAlign="center">
    {user ?
      <div class="ui inverted segment">
          <div>
            <h1>Welcome, @{user.username}!</h1>
            <h2>View your latest <span style={{textDecoration: 'line-through'}}>deaths</span> results here!</h2>
            <h3>Had Enough?</h3>
            <button class="ui inverted red basic button fluid" onClick={()=>executeScroll()}>Delete Account</button>
            <p></p>
            {user.scores_w_summary.map((score)=>{
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
      <h4>You Didn't Think I'd Let You Leave That Easily...</h4>
        <div ref={myRef}>
            <button class="ui inverted red basic button" onClick={handleDelete}>Actually Delete My Account</button>
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
