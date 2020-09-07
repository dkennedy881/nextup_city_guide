import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//pages
import { Home, Queues } from "./Pages";

//components
import { NavBar } from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Queues /> */}
      <Home />
    </div>
  );
}

export default App;
