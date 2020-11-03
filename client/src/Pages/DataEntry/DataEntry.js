import React, { useEffect, useState } from "react";
import { Login } from "./Components/LogIn";
import { QueueTable } from "./Components/QueueTable";

//comps

const DataEntry = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const checkIsLoggedIn = () => {
    if (localStorage.getItem("isLoggedIn")) {
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    document.querySelector("body").style.overflow = "visible";
    document.querySelector("body").scrollTo(0, 0);

    checkIsLoggedIn();
  }, []);
  return isLoggedIn ? (
    <div className="container-fluid">
      <QueueTable />
    </div>
  ) : (
    <Login setIsLoggedIn={setIsLoggedIn} setLoggedInUser={setLoggedInUser} />
  );
};

export { DataEntry };
