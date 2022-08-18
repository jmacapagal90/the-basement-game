// client/src/components/App.js
import { useState, useEffect,useRef } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Game from './Game';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import NavBar from './NavBar';
import Scoreboard from "./Scoreboard";
import GameLanding from "./GameLanding";

function App() {
  const [ user, setUser ] = useState(null)
  const [ decisions, setDecisions ] = useState("");
  const [ userAnswer, setUserAnswer ] = useState(null)
  const [ isCorrect, setIsCorrect ] = useState(false)
  const [ turn, setTurn ] = useState(1)
  const [ gameID,setGameID] = useState(0)
  const [ scoreID, setScoreID] = useState(0)
  const [ points, setPoints ] = useState(0)
  const isFirstRender = useRef(false)
  console.log("isFirstRender:",isFirstRender.current)
  // login
  useEffect(() => {
    // auto-login
    fetch('/myaccount').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  //fetch Decision w Outcome Data
  useEffect(() => {
    //Fetch Decisions Async
    const fetchDecisions = async () => {
        await fetch("/decisions")
                    .then((r) => r.json())
                    .then((decision_data) => setDecisions(decision_data));
    }

    fetchDecisions().catch(console.error)
  }, []);
  
  //this UseEffect is running on first render
  useEffect(()=>{
      checkAnswer()
  },[userAnswer]) 
 
  useEffect(()=>{
    console.log("userAnswer:", userAnswer)
  }, [userAnswer])

  //this is grabbing one decision for now

  //need to find where prev_decision_id = current_id - 1?
  const findDecision =  decisions && decisions.find(decision => decision.id === turn)
  
  //POST Game & Score
  async function startGame(){
   const response = await fetch('/scores',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        player_id: user.id,    
        points: 0
        }),
    })
    
    const data = response.json();
      if (response.ok){
        data.then((scoreData)=>{
          console.log(scoreData)
          setGameID(scoreData.game_id)
          setScoreID(scoreData.id)
        })  
      } else {
        console.log(data)
      }
  }

  function handleTrue(){
    setUserAnswer(true)
  }

  function handleFalse(){
    setUserAnswer(false)
  }



  // checking if answer is good
  function checkAnswer(){
    console.log("userAnswer:",userAnswer)
    if (userAnswer!== null && userAnswer === findDecision.answer){
      console.log("turn:",turn)
      setIsCorrect(true)
      setTurn(()=> turn + 1)
      setPoints(()=> points + 100)
      handleUpdate()
      setUserAnswer(null)
    } else if (userAnswer!== null && userAnswer !== findDecision.answer){
      setIsCorrect(false)
      handleUpdate()
    } else {
        return 
    }
    
  }

  console.log("actual answer:", findDecision.answer)

  function handleUpdate(){
    fetch(`/scores/${scoreID}`,{
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        points: points
      })      
    })

    fetch(`/games/${gameID}`,{
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        outcomes_id: turn
      })      
    })
  }


  //clears cache upon return home
  function clearCache(){
    setUserAnswer(null)
    setIsCorrect(null)
    setTurn(1)
    setPoints(0)
    handleUpdate()
  }



  return (
    <BrowserRouter>
      <div>
        <NavBar user={user} setUser={setUser} clearCache={clearCache}/>
      </div>
      <div className="App">
        <Switch>
            <Route path='/login'>
                {user ? (
                  <Redirect to='/' />
                ) : (
                  <Login setUser={setUser} />
                )}
              </Route>
          <Route exact path="/signup">
              {user ? (
                  <Redirect to='/' />
                ) : (
                  <Signup setUser={setUser}/>
              )}
          </Route>
          <Route exact path="/">
            <Home user={user} startGame={startGame}/>
          </Route>
          <Route exact path="/scores">
            <Scoreboard user={user} />
          </Route>
          <Route exact path="/startgame">
            <GameLanding />
          </Route>
          <Route exact path="/game">
            <Game 
            gameID={gameID}
            turn={turn}
            findDecision={findDecision} 
            isCorrect={isCorrect} 
            userAnswer={userAnswer}
            setUserAnswer={setUserAnswer}
            clearCache={clearCache}
            points={points}
            handleTrue={handleTrue}
            handleFalse={handleFalse}
            />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;