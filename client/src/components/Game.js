import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Game({ findDecision, handleTrue, handleFalse, isCorrect, userAnswer, clearCache }){
    const { prompt } = findDecision
    const { outcome } = findDecision
    const death = outcome && outcome.result
   
    function showPrompt(){
        return (        
            <>
                <h1>{prompt}</h1>
                <button onClick={()=>handleTrue()}>Yes</button>
                <button onClick={()=>handleFalse()}>No</button>
                <Link to="/" onClick={()=>clearCache()}>Return Home</Link>
            </>
            )
    }

    function showDeath(){
        return (
            <>
                <h1>{death}</h1>
                <Link to="/" onClick={()=>clearCache()}>Return Home</Link>
            </>
            )
    }

    const renderPage = () => {
        if (userAnswer === null || userAnswer !== null && isCorrect === true){
            return (        
                <>{showPrompt()}</>
            )
        } else if (userAnswer !== null && isCorrect === false){
                return (        
                <>{showDeath()}</>
        )
     }
    }
    
    console.log("isCorrect:",isCorrect)
    console.log("userAnswer:",userAnswer)

    return (
        <>
        {renderPage()}
        </>
    )
}

export default Game;