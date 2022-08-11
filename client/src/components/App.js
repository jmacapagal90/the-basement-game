// client/src/components/App.js
import { useState, useEffect,useRef } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Game from './Game';
import Home from './Home';

function App() {
  const [decisions, setDecisions] = useState("");
  const [outcomes, setOutcomes] = useState("");
  const [userAnswer, setUserAnswer] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const isFirstRender = useRef(false)
  ///

  //fetch Decision w Outcome Data
  useEffect(() => {
    //Fetch Decisions Async
    const fetchDecisions = async () => {
        const data = await fetch("/decisions")
                    .then((r) => r.json())
                    .then((decision_data) => setDecisions(decision_data));
    }

    fetchDecisions().catch(console.error)
  }, []);
  //this UseEffect is running on first render
  useEffect(()=>{
    if (isFirstRender.current){ // check if this is the first render, if true, then set isFirstRender to true
      isFirstRender.current = true;
    } 
  },[userAnswer]) //use effect will run when userAnswer is changed by handleTrue or handleFalse

  //this is grabbing one decision for now
  const findDecision = decisions && decisions.find(decision => decision.id === 1)
  
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
  
    async function checkAnswer(){
    if (userAnswer === findDecision.answer){
      setIsCorrect(true)
    } else if (userAnswer !== findDecision.answer){
      setIsCorrect(false)
     }
  }

  function clearCache(){
    setUserAnswer(null)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/game">
            <Game 
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