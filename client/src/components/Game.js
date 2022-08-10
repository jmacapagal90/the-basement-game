import { useState, useEffect } from "react";

function Game({ decisions,outcomes }){

    // function firstDecision(decision){
    //     return decision.id === 1
    //   }
  
      const firstDecision = decisions.find(decision => decision.id === 1)
  


    return (
    <>
        <h1>{firstDecision.prompt}</h1>
        <button onClick={console.log("sup")}>Yes</button>
        <button>No</button>
    </>
    )
}

export default Game;