import { Container,Transition } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";
import Scoreboard from "./Scoreboard";
import { useState, useEffect } from 'react';

function Home({ user,startGame,visible,setVisible }){

    useEffect(() => {
        setVisible(true)
    },[])

    function renderHome(){
    if (user) {
        return (
            <div class="ui inverted segment">
                <br></br>
                <br></br>
                <Transition visible={visible} animation='fade' duration={2000}>
                    <h1 class="ui huge header">Welcome To The Basement...</h1>
                </Transition>
                <button class="ui inverted red basic button">
                    <NavLink to='/startgame' onClick={()=>startGame()}>Play</NavLink>
                </button>
                <Transition.Group visible={visible} animation='fade' duration={2000}>
                    <Scoreboard />
                </Transition.Group >
            </div>
        )
    } else {
        return (
            <div class="ui inverted segment">
                <h1 class="ui huge header">Welcome To The Basement...</h1>
                <button class="ui inverted red basic button">
                    <NavLink to='/playerlogin'>Login to Play</NavLink>
                </button>
                <Scoreboard />
            </div>
     )
    }}
    return (
        <Container textAlign="center">
            {renderHome()}
        </Container>
    )
}

export default Home;