import { useState, useEffect,useRef } from "react";
import { Link } from "react-router-dom";

function Home(){

    return (
        <>
        <h1>Welcome</h1>
        <Link to='/game'>Play</Link>
        </>
    )
}

export default Home;