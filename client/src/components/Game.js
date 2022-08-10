import { useState, useEffect } from "react";

function Game({ findDecision,outcomes, handleTrue,handleFalse }){
    const {prompt} = findDecision
    // function firstDecision(decision){
    //     return decision.id === 1
    //   }
  

    return (
    <>
        <h1>{prompt}</h1>
        <button onClick={(e)=>handleTrue(e)} value="1">Yes</button>
        <button onClick={(e)=>handleFalse(e)} value="0">No</button>
    </>
    )
}

export default Game;