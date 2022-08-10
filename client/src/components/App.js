// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Game from './Game'

function App() {
  const [decisions, setDecisions] = useState("");
  const [outcomes, setOutcomes] = useState("");
  const [userAnswer, setUserAnswer] = useState(0)
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
  ///
    //handling answer Yes
    function handleTrue(e){
      setUserAnswer(true)
      setDeath()
    }
    //handling answer No
    function handleFalse(e){
      setUserAnswer(false)
      setDeath()
    }
 
    const findDecision = decisions && decisions.find(decision => decision.id === 1)

    function setDeath(){
      setOutcome()
    }
    
    function setOutcome(){
      if (findDecision.answer !== userAnswer){
        console.log(findDecision.outcome.result)
        } else {
        console.log("nice")
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
            <Game findDecision={findDecision} outcomes={outcomes} handleTrue={handleTrue} handleFalse={handleFalse}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;