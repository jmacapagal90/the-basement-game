import { useState, useEffect } from "react";

function Game({ findDecision,handleTrue,handleFalse }){
    const {prompt} = findDecision


    return (
    <>
        <h1>{prompt}</h1>
        <button onClick={()=>handleTrue()}>Yes</button>
        <button onClick={()=>handleFalse()}>No</button>
    </>
    )
}

export default Game;