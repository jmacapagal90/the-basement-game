import { useState, useEffect } from "react";

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

   

    const renderScores = () => scores.map((score)=> (
        <>
          <h2>@{score.username} - {score.points}pts</h2>
          <h2>{score.game.game_w_outcome}</h2>
          <p>{score.updated_at}</p>
        </>
    ))

    return (
        <>
        <h1>Scores</h1>
        <>{renderScores()}</>
        </>
    )
}

export default Scoreboard;