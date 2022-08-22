import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { Container,Transition } from 'semantic-ui-react'

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
    const [ visible, setVisible ] = useState(false)

    useEffect(() => {
        setVisible(false)
    },[userAnswer])

    useEffect(() => {
        setVisible(true)
    },[turn])



    console.log(turn)
    /// handling Prompt
    function handlePrompt(){
        return (        
            <div class="ui inverted segment">
                <br></br>
                <br></br>
                <Transition visible={visible} animation='fade' duration={2000}>
                    <h4 class="ui header" id="prompt">{prompt}</h4>
                </Transition>
                <br></br>
                <h4 class="ui horizontal inverted divider">Choose...</h4>  
                <br></br>
                <div class="ui fluid buttons">         
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
                <br></br>
                <br></br>
                <Transition visible={true} animation='bounce' duration={500}>
                    <h3 class="ui header" id="death">{result}</h3>
                </Transition>
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
        <h3 textAlign="center">Points: {points == 0 ? 0 : points}</h3>
        </div>
        </Container>
    )
}

export default Game;