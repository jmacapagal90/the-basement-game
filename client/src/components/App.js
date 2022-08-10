// client/src/components/App.js
import { useState, useEffect,useRef } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Game from './Game'

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
    } else {
      checkAnswer(); //subsequent renders will set isFirstRender to false and then we can check answer
    }
  },[userAnswer]) //use effect will run when userAnswer is changed by handleTrue or handleFalse

  //this is grabbing one decision for now
  const findDecision = decisions && decisions.find(decision => decision.id === 1)
  
  //handling answer Yes
  function handleTrue(){
    setUserAnswer(true) 
  }

  //handling answer No
  function handleFalse(){
    setUserAnswer(false)
  }
  
  async function checkAnswer(){
    if (userAnswer === findDecision.answer){
      console.log("You gud")
    } else if (userAnswer !== findDecision.answer && findDecision){
      console.log(await findDecision.outcome.result)
     }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/">
            <Game 
            findDecision={findDecision} 
            isCorrect={isCorrect} 
            handleTrue={handleTrue} 
            handleFalse={handleFalse} 
            userAnswer={userAnswer}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;