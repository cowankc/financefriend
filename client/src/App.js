import React from "react";
import NoMatch from "./pages/NoMatch";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Books />
        <Route path="/" component={Books}/>
        <Route exact path="/NoMatch" component={NoMatch}/>
      </div>
    </Router>
  );
}

export default App;
