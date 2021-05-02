import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './views/homePage';
import SouthIndian from './views/southIndian';
import NorthIndian from './views/northIndian';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
function App() {
  return (
    <div className="">     
      <Router>
        <Switch>       
          <Route path="/" exact component={HomePage} />
          <Route path="/southindian-items" component={SouthIndian} />
          <Route path="/northindian-items" component={NorthIndian} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
