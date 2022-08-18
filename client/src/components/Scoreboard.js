import { useState, useEffect } from "react";
import Scorecard from "./Scorecard";


function Scoreboard(){
    const [ scores, setScores ] = useState([])
    
    useEffect(() => {
      const fetchScores = async () => {
          await fetch("/scores")
                      .then((r) => r.json())
                      .then((score_data) => setScores(score_data));
      }  
        fetchScores().catch(console.error)
    }, []);

   
    console.log(scores)
    const renderScores = () => scores.map((score)=> (
        <>
          <Scorecard 
            key={score.id}
            username={score.username}
            points={score.points}
            summary={score.game.game_w_outcome}
            updated_at={score.updated_at}
          />
        </>
    ))

    return (
        <>
        <h1>Scores</h1>
        <>{renderScores() ? renderScores() : <h2>Loading...</h2>}</>
        </>
    )
}

export default Scoreboard;