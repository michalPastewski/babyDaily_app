import React from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import './styles/app.css';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import Meal from './pages/Meal';
import Diaper from './pages/Diaper';
import Sleep from './pages/Sleep';

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <Navigation />
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/meal" component={Meal} />
          <Route path="/diaper" component={Diaper} />
          <Route path="/sleep" component={Sleep} />
        </Switch>
      </div>
    </Router>
    );
}

export default App;
