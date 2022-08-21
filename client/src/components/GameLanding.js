import React from "react";
import { NavLink } from "react-router-dom";
import { Header,Container } from 'semantic-ui-react'

function GameLanding(){

    return (
        <Container textAlign="center">
            <div class="ui inverted segment">
                <br></br>
                <br></br>
            <h1 class="ui huge header">"The game is simple. Answer correctly: you live... Answer incorrectly: you don't... Ready?"</h1>
            <button class="ui inverted red basic button">
                <NavLink to='/playgame' activeStyle={{color: "red"}}>Start</NavLink>
                </button>
        </div>
        </Container>
    )
}

export default GameLanding;