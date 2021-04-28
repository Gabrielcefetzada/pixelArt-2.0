import React from 'react';
import './App.css';
import { Header } from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { PixelBox } from './components/PixelBox';
import { About } from './components/About';

export default function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
        <Switch>
          <Route path="/" exact component={PixelBox}/>
          <Route path="/about" exact component={About}/>
        </Switch>
      </div>
    </Router>
  );
}

