// client/src/components/App.js
import { useState, useEffect,useRef } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Game from './Game';
import Home from './Home';

function App() {
  const [ decisions, setDecisions ] = useState("");
  const [ outcomes, setOutcomes ] = useState("");
  const [ userAnswer, setUserAnswer ] = useState(null)
  const [ isCorrect, setIsCorrect ] = useState(null)
  const [ turn, setTurn ] = useState(1)
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
      checkAnswer()
    }
  },[userAnswer]) //use effect will run when userAnswer is changed by handleTrue or handleFalse
 
  //this is grabbing one decision for now
  // if the answer is correct, i need to show the next decision by grabbing the decision with the prev_decision_id of the prev decision...

  //need to find where prev_decision_id = current_id - 1?
  const findDecision = decisions && decisions.find(decision => {
    if (turn === 1){
      return decision.id
    } else {
      return turn
    }
  })
  console.log(findDecision)
  console.log(turn)
  //handling answer Yes
  function handleTrue(){
    setUserAnswer(true) 
    setTurn(()=> turn + 1)
  }

  //handling answer No
  function handleFalse(){
    setUserAnswer(false)
    setTurn(()=> turn + 1)
  }

  // checking if answer is good
  function checkAnswer(){
     if (userAnswer === findDecision.answer){
      setIsCorrect(true)
      } else if (userAnswer !== findDecision.answer){
      setIsCorrect(false)
     }
  }

  function clearCache(){
    setUserAnswer(null)
    setIsCorrect(null)
    setTurn(0)
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