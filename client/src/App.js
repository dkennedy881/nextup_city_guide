import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//pages
import { Home } from "./Pages";

//components
import { NavBar } from "./Components/NavBar/NavBar";

function App() {
  useEffect(() => {
    fetch("/api/getList")
      .then((res) => res.json())
      .then((list) => console.log(list));
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
