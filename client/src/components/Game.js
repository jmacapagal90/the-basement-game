import { NavLink } from "react-router-dom";
import { Header,Container,Item } from 'semantic-ui-react'

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
    
    /// handling Prompt
    function handlePrompt(){
        return (        
            <div class="ui inverted segment">
                <h1 class="ui header">{prompt}</h1>
                <h4 class="ui horizontal inverted divider">Choose...</h4>     
                <div class="ui buttons">         
                    <button class="positive ui button" onClick={()=>handleTrue()}>Yes</button>
                    <div class="or"></div>
                    <button class="negative ui button" onClick={()=>handleFalse()}>No</button>
                </div>
            </div>
            )
    }
    // showing Death
    function handleDeath(){
        return (
            <div class="ui inverted segment">
                <h1 class="ui header">{result}</h1>
                    <button class="ui inverted red basic button">
                        <NavLink to="/" onClick={()=>clearCache()} activeStyle={{color: "red"}}>Return Home</NavLink>
                    </button>
            </div>
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
        <Container textAlign="center">
        <div class="ui inverted segment">
        {renderPage()}
        <h4 textAlign="center">Points: {points == 0 ? 0 : points}</h4>
        </div>
        </Container>
    )
}

export default Game;