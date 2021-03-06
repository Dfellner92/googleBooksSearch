import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Books />
          </Route>
          <Route exact path="/books">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
