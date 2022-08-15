import { useState, useEffect } from "react";

function Scoreboard(){
    const [ scores, setScores ] = useState()
    
    useEffect(() => {
        // auto-login
        fetch('/scores').then((r) => {
          if (r.ok) {
            r.json().then((data) => setScores(data));
          }
        });
      }, []);    

      console.log(scores)
    return (
        <h1>Score</h1>
    )
}

export default Scoreboard;