import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Game({ findDecision, handleTrue, handleFalse, isCorrect, userAnswer, clearCache }){
    const { prompt } = findDecision
    const { outcome } = findDecision
    // console.log(outcome.result)

    function renderGame(){
        if (isCorrect == true){
            return <h1>you good</h1>
        } else {
            return <h1>you ded</h1>
        }
    }
    
    console.log("isCorrect:",isCorrect)
    console.log("userAnswer:",userAnswer)

    return (
        <>
              <h1>{prompt}</h1>
              <button onClick={()=>handleTrue()}>Yes</button>
              <button onClick={()=>handleFalse()}>No</button>
              <Link to="/">Return Home</Link>
        </>
    )
}

export default Game;