import { Header,Container } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

function Home({ user,startGame }){


    function renderHome(){
    if (user) {
        return (
            <div class="ui inverted segment">
                <h1 class="ui huge header">Welcome To The Basement...</h1>
                <button class="ui inverted red basic button">
                    <NavLink to='/startgame' onClick={()=>startGame()} activeStyle={{
                        color: "red",
                        fontWeight:"bold"
                        
                        }}>Play</NavLink>
                </button>
            </div>
        )
    } else {
        return (
            <div class="ui inverted segment">
                <h1 class="ui huge header">Welcome To The Basement...</h1>
                <button class="ui inverted red basic button">
                    <NavLink to='/playerlogin' activeStyle={{color: "red"}}>Login to Play</NavLink>
                </button>
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