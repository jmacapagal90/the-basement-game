import { Link } from "react-router-dom";

function Game({ findDecision, handleTrue, handleFalse, isCorrect, userAnswer, clearCache }){
    const { prompt }  = findDecision 
    const { outcomes } = findDecision 
    const { result } = outcomes

    /// handling Prompt
    function handlePrompt(){
        return (        
            <>
                <h1>{prompt}</h1>
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
                <h1>{result}</h1>
                <Link to="/" onClick={()=>clearCache()}>Return Home</Link>
            </>
            )
    }
    //conditionally rendering Page depending on answers
    const renderPage = () => {
        if (userAnswer === null ||  isCorrect === true){
            return (        
                <>{handlePrompt()}</>
            )
        } else if (userAnswer !== null && isCorrect === false){
                return (        
                <>{handleDeath()}</>
        )
     }
    }


    return (
        <>
        {renderPage()}
        </>
    )
}

export default Game;