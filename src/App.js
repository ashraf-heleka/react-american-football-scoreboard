//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  let [lionsValue, lionsSetValue] = useState(0);
  let [tigersValue, tigersSetValue] = useState(0);
  
  const lionsTouchDown = event => {
    return lionsSetValue(lionsValue + 7);
  }
  const lionsFieldGoal = event => {
    return lionsSetValue(lionsValue + 3);
  }

  const tigersTouchDown = event => {
    return tigersSetValue(tigersValue + 7);
  }
  const tigersFieldGoal = event => {
    return tigersSetValue(tigersValue + 3);
  }

  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);



  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

    <div className="home__score"> {lionsValue}</div>
          </div>
          <button className={"timer-${isActive ? 'active' : 'inactive'}"} onClick={toggle}>{isActive ? 'Pause' : 'Start'}</button>
          <button onClick={reset}>Reset</button>
          <div className="countDown">{seconds}s</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigersValue}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
        
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={ lionsTouchDown }>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={ lionsFieldGoal }>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick= { tigersTouchDown }>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={ tigersFieldGoal }>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
