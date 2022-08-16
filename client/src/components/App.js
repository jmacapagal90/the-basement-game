// client/src/components/App.js
import { useState, useEffect,useRef } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Game from './Game';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import NavBar from './NavBar';
import Scoreboard from "./Scoreboard";

function App() {
  const [ user, setUser ] = useState(null)
  const [ decisions, setDecisions ] = useState("");
  const [ userAnswer, setUserAnswer ] = useState(null)
  const [ isCorrect, setIsCorrect ] = useState(null)
  const [ turn, setTurn ] = useState(1)
  const isFirstRender = useRef(false)

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
    if (isFirstRender.current){ // check if this is the first render, if true, then set isFirstRender to true
      isFirstRender.current = true;
    } else {
      checkAnswer()
    }
  },[userAnswer]) //use effect will run when userAnswer is changed by handleTrue or handleFalse
 
  //this is grabbing one decision for now
  // if the answer is correct, i need to show the next decision by grabbing the decision with the prev_decision_id of the prev decision...

  //need to find where prev_decision_id = current_id - 1?
  const findDecision =  decisions && decisions.find(decision => decision.id === turn)

  //POST Game
  function startGame(){
    fetch('/games',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        outcomes_id: 1 
      }),
    })  
  }

  //handling answer Yes
  function handleTrue(){
    setUserAnswer(true) 
    checkAnswer()
  }

  //handling answer No
  function handleFalse(){
    setUserAnswer(false)
    checkAnswer()
  }

  // checking if answer is good
  function checkAnswer(){
     if (userAnswer === findDecision.answer && findDecision){
      setIsCorrect(true)
      setTurn(()=>turn+1)
      } else if (userAnswer !== findDecision.answer && findDecision){
      setIsCorrect(false)
     }
  }
  //clears cache upon return home
  function clearCache(){
    setUserAnswer(null)
    setIsCorrect(null)
    setTurn(1)
  }


  return (
    <BrowserRouter>
      <div>
        <NavBar user={user} setUser={setUser} />
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
          <Route exact path="/game">
            <Game 
            turn={turn}
            findDecision={findDecision} 
            isCorrect={isCorrect} 
            handleTrue={handleTrue} 
            handleFalse={handleFalse} 
            userAnswer={userAnswer}
            clearCache={clearCache}
            />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;