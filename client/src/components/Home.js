import { useState, useEffect,useRef } from "react";
import { Link } from "react-router-dom";

function Home({ user,startGame }){



    if (user) {
        return (
            <>
                <h1>Welcome To The Basement...</h1>
                <Link to='/startgame' onClick={()=>startGame()}>Play</Link>
            </>
        )
    } else{
        return (
            <>
            <h1>Welcome To The Basement...</h1>
            <Link to='/login'>Login to Play</Link>
    </>
     )
    }
}

export default Home;