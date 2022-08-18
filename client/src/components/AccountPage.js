import React from 'react';
import UserScorecard from './UserScorecard';
import { Link, Redirect } from 'react-router-dom';
import {Button} from 'semantic-ui-react'

function AccountPage({ user }) {
    
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

  return (
    <>
    {user ?
      <>
        <h1>Welcome, {user.username}!</h1>
        <h2>View your latest results here!</h2>
        <h3>Delete Account</h3>
        <Button onClick={handleDelete}>Delete</Button>
        {user.scores_w_summary.map((score)=>{
            return (
        <UserScorecard 
            points={score.points} 
            summary={score.summary} 
            updated_at={score.updated_at}
            />
        )
        })}
      </>
     : 
     <>
        Still Loading...
     </>
    }
    </>
  );
}

export default AccountPage;
