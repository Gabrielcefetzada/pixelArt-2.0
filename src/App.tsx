import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { IndexView } from "./components/IndexView";
import { About } from "./components/About";

export default function App() {
  return (
    <Router>
      <div className="App background">
        <Header />
        <Switch>
          <Route path="/" exact component={IndexView} />
          <Route path="/about" exact component={About} />
        </Switch>
      </div>
    </Router>
  );
}
