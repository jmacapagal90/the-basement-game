import React from "react";
import { Card } from 'semantic-ui-react'

function UserScorecard({points,summary,updated_at}){
    
    return (
        <Card>
            <Card.Header>{summary}</Card.Header> 
            <Card.Description>{points}</Card.Description> 
            <Card.Description>{updated_at}</Card.Description> 
        </Card>
    )
}

export default UserScorecard;