import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//pagesx
import { Home, Queues, DataEntry, Policy } from "./Pages";

//components
import { NavBar } from "./Components/NavBar/NavBar";

function App() {
  // if (window.location.protocol === "http:") {
  //   window.location.href = window.location.href.replace(
  //     /http:(.*)/g,
  //     "https:$1"
  //   );
  // }

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/about">
            <Home />
          </Route>
          <Route exact path="/dataentry">
            <DataEntry />
          </Route>
          <Route exact path="/privacypolicy">
            <Policy />
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
