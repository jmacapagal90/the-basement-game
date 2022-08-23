import { useState, useEffect } from "react";
import UserScorecard from "./UserScorecard";
import { Container,List,Transition } from 'semantic-ui-react'

function Scoreboard({visible,setVisible}){
  const [ scores, setScores ] = useState([])
  useEffect(() => {
      const fetchScores = async () => {
      await fetch("/scores").then((r) => r.json()).then((score_data) => setScores(score_data))
    }
    fetchScores().catch(console.error)
  },[])
  
    const renderScores = () => scores && scores.slice(0,10).map((score)=> (
      <div class="ui inverted cards">
          <UserScorecard 
            key={score.id}
            username={score.username}
            points={score.points}
            summary={score.game.game_w_outcome}
            updated_at={score.updated_at}
          />
        </div>

    ))

    return (
      <Container textAlign="center">
      <div class="ui inverted segment">
        <h1>Our Latest Losers...</h1>
        <>{renderScores()}</>
      </div>
      </Container>
    )
}

export default Scoreboard;