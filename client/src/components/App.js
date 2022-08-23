// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect,useLocation } from "react-router-dom";
import Game from './Game';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import NavBar from './NavBar';
import Scoreboard from "./Scoreboard";
import GameLanding from "./GameLanding";
import AccountPage from "./AccountPage";
import ResetPassword from './ResetPassword'
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
  const [ visible, setVisible ] = useState(false)
  
  
  // initialize data
  useEffect(() => {
    const fetchData = async () => {
      await fetch("/decisions").then((r) => r.json()).then((decision_data) => setDecisions(decision_data));
      await fetch('/myaccount').then((r) => r.json().then((user) => setUser(user)));
    }     
    fetchData().catch(console.error)
  },[])
  
  //Check answer everytime user answers
  useEffect(()=>{
      checkAnswer()
  },[userAnswer]) 

  const findDecision =  decisions && decisions.find(decision => decision.id === turn)
  
  //POST Game & Score
  async function startGame(){
    setVisible(false)
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
    setVisible(false)
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
    setVisible(false)
   
  }



  return (
    <BrowserRouter>
      <Container textAlign="center">
        <NavBar  handleUpdate={handleUpdate} user={user} setUser={setUser} clearCache={clearCache} navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
      </Container>
      <Container textAlign="center" onClick={()=>setNavbarOpen(false)}>
        <Switch>
           <Route path='/resetpassword'>
                <ResetPassword setUser={setUser}/>
            </Route>
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
            <Home 
              user={user} 
              startGame={startGame} 
              visible={visible} 
              setVisible={setVisible}
            />
          </Route>
          <Route exact path="/scoreboard">
          <Scoreboard user={user} visible={visible} setVisible={setVisible}/>
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
            visible={visible}
            setVisible={setVisible}
            />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;