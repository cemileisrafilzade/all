import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./commons";
import { DefenceAttackGame, GameTwo } from "./pages";
import { DAgameCP } from "./context/da-game";

function App() {
  const [data, setData] = useState("");
  console.log(data);
  const set = () => {
    let a = 1;
    setData(d => {
      a++;
      console.count("run");
      return a;
    });
  };

  return (
    <Router>
      <button onClick={set}>+</button>
      <DAgameCP>
        <Header />
        <Switch>
          <Route path="/game-1" component={DefenceAttackGame} />
          <Route path="/game-2" component={GameTwo} />
        </Switch>
      </DAgameCP>
    </Router>
  );
}

export default App;
