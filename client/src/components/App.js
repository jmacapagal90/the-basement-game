// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Game from './Game'

function App() {
  const [decisions, setDecisions] = useState("");
  const [outcomes, setOutcomes] = useState("");

  useEffect(() => {
    //Fetch Decisions Async
    const fetchDecisions = async () => {
        const data = await fetch("/decisions")
                    .then((r) => r.json())
                    .then((decision_data) => setDecisions(decision_data));
    }

    fetchDecisions().catch(console.error)

    //Fetch Outcomes Async
    const fetchOutcomes = async () => {        
      const data = await fetch("/outcomes")
                  .then((r) => r.json())
                  .then((outcome_data) => setOutcomes(outcome_data));
    }
    fetchOutcomes()
    }, []);

    console.log(decisions)

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/">
            <Game decisions={decisions} outcomes={outcomes}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;