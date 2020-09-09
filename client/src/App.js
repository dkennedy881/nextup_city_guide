import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//pages
import { Home, Queues } from "./Pages";

//components
import { NavBar } from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/about">
            <Home />
          </Route>
          <Route path="/">
            <Queues />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
