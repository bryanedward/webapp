import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './containers/Home/Home';
import './App.css'
import Portfolio from './containers/Portfolio/Portfolio';
import AboutUs from './containers/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/webapp" exact component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about-me" component={AboutUs} />
      </Router>
    </div>
  );
}

export default App;
