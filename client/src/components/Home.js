import { Header,Container } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";
import Scoreboard from "./Scoreboard";

function Home({ user,startGame }){


    function renderHome(){
    if (user) {
        return (
            <div class="ui inverted segment">
                <br></br>
                <br></br>
                <h1 class="ui huge header">Welcome To The Basement...</h1>
                <button class="ui inverted red basic button">
                    <NavLink to='/startgame' onClick={()=>startGame()}>Play</NavLink>
                </button>
                <Scoreboard />
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