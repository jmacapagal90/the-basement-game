import React from "react";
import { Link } from "react-router-dom";

function GameLanding(){

    return (
        <>
        <h3>The game is simple. You answer correctly- you live. You don't- you die... Ready?</h3>
        <Link to='/game' >Start</Link>
        </>
    )
}

export default GameLanding;