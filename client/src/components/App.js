// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Game from './Game';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import NavBar from './NavBar';
import Scoreboard from "./Scoreboard";
import GameLanding from "./GameLanding";
import AccountPage from "./AccountPage";
import { Container } from 'semantic-ui-react'

function App() {
  const [ navbarOpen, setNavbarOpen ] = useState(false)
  const [ user, setUser ] = useState(null)
  // const { isAuthenticated, logout } = useAuth0();
  const [ decisions, setDecisions ] = useState("");
  const [ userAnswer, setUserAnswer ] = useState(null)
  const [ isCorrect, setIsCorrect ] = useState(false)
  const [ turn, setTurn ] = useState(1)
  const [ gameID,setGameID] = useState(0)
  const [ scoreID, setScoreID] = useState(0)
  const [ points, setPoints ] = useState(0)

  
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
          setGameID(scoreData.game_id)
          setScoreID(scoreData.id)
        })  
      } else {
        console.log(data.errors)
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
    
    if (userAnswer!== null && userAnswer === findDecision.answer){
      
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
      <Container textAlign="center">
        <NavBar user={user} setUser={setUser} clearCache={clearCache} navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
      </Container>
      <Container textAlign="center" onClick={()=>setNavbarOpen(false)}>
        <Switch>
            <Route path='/playerlogin'>
                {user ? (
                  <Redirect to='/' />
                ) : (
                  <Login setUser={setUser} />
                )}
              </Route>
          <Route exact path="/playersignup">
              {user ? (
                  <Redirect to='/' />
                ) : (
                  <Signup setUser={setUser}/>
              )}
          </Route>
          <Route exact path="/">
            <Home user={user} startGame={startGame}/>
          </Route>
          <Route exact path="/scoreboard">
            <Scoreboard user={user} />
          </Route>
          <Route exact path="/startgame">
            <GameLanding />
          </Route>
          <Route exact path="/account">
              {user ? (
                  <AccountPage user={user} />
                ) : (
                  <Redirect to='/' />
              )}
          </Route>
          <Route exact path="/playgame">
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
      </Container>
    </BrowserRouter>
  );
}

export default App;