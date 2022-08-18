import { Link } from "react-router-dom";
import { useState } from "react";

function Game({ 
        findDecision, 
        handleTrue,
        handleFalse,
        isCorrect, 
        userAnswer, 
        clearCache,
        points,
        turn
     }){
    const { prompt }  = findDecision 
    const { outcomes } = findDecision 
    const result = outcomes && outcomes.map((outcome)=> outcome.result)
    
    
    console.log("isCorrect",isCorrect)
        
    /// handling Prompt
    function handlePrompt(){
        return (        
            <>
                <h2>{prompt}</h2>
                <button onClick={()=>handleTrue()}>Yes</button>
                <button onClick={()=>handleFalse()}>No</button>
                <Link to="/" onClick={()=>clearCache()}>Return Home</Link> 
            </>
            )
    }
    // showing Death
    function handleDeath(){
        return (
            <>
                <h2>{result}</h2>
                <Link to="/" onClick={()=>clearCache()}>Return Home</Link>
            </>
            )
    }
    //conditionally rendering Page depending on answers
    const renderPage = () => {
        if (userAnswer != null && isCorrect === true){
            return (        
                <>{handlePrompt()}</>
            )
        } else if (userAnswer != null && isCorrect === false){
                return (       
                <>{handleDeath()}</>
                )
        } else {
            return (        
                <>{handlePrompt()}</>
            )
        }
     }
    


    return (
        <>
        <h2>Turn: {turn}</h2>
        {renderPage()}
        <h2>Points: {points == 0 ? 0 : points}</h2>
        </>
    )
}

export default Game;