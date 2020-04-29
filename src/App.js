import React from "react";
import Main from "./pages/Main/Main";
import Description from "./pages/Description/Description";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Main} />
      <Route exact path="/description/:id" component={Description} />
    </div>
  );
}

export default App;
